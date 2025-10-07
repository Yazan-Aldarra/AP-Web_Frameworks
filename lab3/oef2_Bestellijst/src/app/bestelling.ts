import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-bestelling',
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="form">
      <input placeholder="productd" formControlName="productd">
      <input placeholder="aantald" formControlName="aantald">
      <input placeholder="prijsd" formControlName="prijsd">
      <input placeholder="klantd" formControlName="klantd">
      <input placeholder="regelsd" formControlName="regelsd">
      <input placeholder="opmerkingend" formControlName="opmerkingend">
    </form>
    <div formArrayName="form">
      @for (some of regels.controls; let i = $index; track $index) {
        <input [placeholder]="i" [formControlName]="i">
        <h2>
          {{ some + " " + i }}
        </h2>
      }
    </div>
  `,
  styles: ``,
})
export class Bestelling {
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
    regels: new FormArray<FormGroup<any>>([this.regelGroup()]),
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
  onSubmit() {

  }
}
