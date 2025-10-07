import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { NgFor, NgIf, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-bestelling',
  imports: [ReactiveFormsModule, NgFor, NgIf, DecimalPipe],
  template: `
    <form [formGroup]="form">
      <input placeholder="productd" formControlName="klant" />
      <div formArrayName="regels">
        @for (regel of regels.controls; let i = $index; track $index) {
        <div [formGroupName]="i">
          <label for="product">product</label>

          <input name="product" formControlName="product" />
          <label for="aantal">aantal</label>
          @if (regel.get("product")?.invalid && regel.get("product")?.touched) {
          <h2>product is INVALID</h2>
          }
          <input name="aantal" formControlName="aantal" />
          <label for="prijs">prijs</label>
          @if (regel.get("aantal")?.invalid) {
          <h2>product is INVALID</h2>
          }
          <input name="prijs" formControlName="prijs" />
        </div>
        }
      </div>
      <label for="opmerkingen">Opmerkingen</label>
      <textarea name="opmerkingen" formControlName="opmerkingen"></textarea>
    </form>
  `,
  styles: ``,
})
export class Bestelling implements OnInit {
  regelGroup() {
    return new FormGroup({
      product: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      aantal: new FormControl<number>(1, {
        nonNullable: true,
        validators: [Validators.required, Validators.min(1)],
      }),
      prijs: new FormControl<number>(0, {
        nonNullable: true,
        validators: [Validators.required, Validators.min(0)],
      }),
    });
  }
  form = new FormGroup({
    klant: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    regels: new FormArray<FormGroup<any>>([this.regelGroup(), this.regelGroup()]),
    opmerkingen: new FormControl<string>('', { nonNullable: true }),
  });
  get regels() {
    return this.form.controls.regels as FormArray;
  }
  get totaal(): number {
    return this.regels.controls.reduce(
      (sum, g) => sum + (g.value.aantal ?? 0) * (g.value.prijs ?? 0),
      0
    );
  }

  onSubmit() {}

  ngOnInit(): void {
    console.log(this.regels.controls);
  }
}
