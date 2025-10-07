import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-klant-form',
  imports: [ReactiveFormsModule, JsonPipe],
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <label>Email</label>
      <input formControlName="email" />
      @if (form.controls.email.invalid && form.controls.email.touched) {
      <div>Ongeldig Email</div>
      }
      <label>Naam</label>
      <input formControlName="naam" />

      @if (form.controls.naam.invalid && form.controls.naam.touched) {
      <div>Naam is Ongeldig</div>
      }

      <label>land</label>
      <input formControlName="land" />

      @if (form.controls.land.invalid && form.controls.land.touched) {
      <div>Naam is Ongeldig</div>
      }

      <label>geboortedatum</label>
      <input formControlName="geboortedatum" />

      <button type="submit" [disabled]="form.invalid">Send</button>
    </form>

    <button (click)="form.reset()">Clear Form</button>

    {{ form.value | json }}

    @if (isSubmitted) {
      <div>Tis gelukt!!</div>
    }
  `,
  styles: /*css*/ `

  `,
})
export class KlantForm {
  form = new FormGroup({
    naam: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(2)],
    }),
    email: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    geboortedatum: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    land: new FormControl<string>('BE', { nonNullable: true, validators: [Validators.required] }),
  });
  landen = ['BE', 'NL', 'FR', 'DE'];

  isSubmitted = false;
  onSubmit() {
    this.isSubmitted = true;
  }
}
