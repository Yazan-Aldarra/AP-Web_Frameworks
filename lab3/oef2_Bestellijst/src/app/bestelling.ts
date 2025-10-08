import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { DecimalPipe, CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-bestelling',
  imports: [ReactiveFormsModule, CurrencyPipe],
  template: `
    <form [formGroup]="form" (submit)="onSubmit()">
      <label for="Naam">Naam</label>
      <input placeholder="Yazan" formControlName="klant" />
      <div class="regels" formArrayName="regels">
        @for (regel of regels.controls; let i = $index; track $index) {
        <div class="regel" [formGroupName]="i">
          <label for="product">product</label>
          <input name="product" formControlName="product" />
          @if (regel.get("product")?.invalid && regel.get("product")?.touched) {
          <h2>product is INVALID</h2>
          }

          <label for="aantal">aantal</label>
          <input name="aantal" formControlName="aantal" />
          @if (regel.get("aantal")?.invalid && regel.get("aantal")?.touched) {
          <h2>Aantal is INVALID</h2>
          }

          <label for="prijs">prijs</label>
          <input name="prijs" formControlName="prijs" />
          @if (regel.get("prijs")?.invalid && regel.get("prijs")?.touched) {
          <h2>Prijs is INVALID</h2>
          }

          <button (click)="removeRegel(i)">Verwijder een regel</button>
        </div>
        }
      </div>
      <button (click)="addRegel()">Voeg een regel</button>

        <div>totale prijs: {{totaal | currency:'EUR'}}</div>
      @if (totaal >= 100) {
        <div>Gratis verzending!</div>
      }

      <label for="opmerkingen">Opmerkingen</label>
      <textarea name="opmerkingen" formControlName="opmerkingen"></textarea>

      <button type="submit" [disabled]="form.invalid">Stuur</button>
    </form>
  `,
  styles: /*css*/ `
    form {
      display: flex;
      flex-direction: column;
      width: fit-content;
      gap: .6rem;
    }
    .regels {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .regel {
      display: flex;
      gap: .5rem;
    }


  `,
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
    if (!this.form.invalid)
      console.log("Form is submitted!");
    else 
      console.log("The form is invalid");
  }
  addRegel() {
    this.form.controls.regels.push(this.regelGroup());
  }
  removeRegel(i: number) {
    this.form.controls.regels.removeAt(i);
  }
}
