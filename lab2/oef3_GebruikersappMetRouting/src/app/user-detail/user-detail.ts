import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterConfigOptions } from '@angular/router';

interface Gebruiker {
  id: number;
  naam: string;
  email: string;
}

@Component({
  selector: 'app-user-detail',
  imports: [],
  template: `
    @if (gebruiker) {
    <h1>{{ gebruiker.id }}</h1>
    <h2>{{ gebruiker.naam }}</h2>
    <h3>{{ gebruiker.email }}</h3>
    }
  `,
  styles: ``,
})
export class UserDetail implements OnInit {
  gebruikers = [
    { id: 1, naam: 'Alice Janssens', email: 'alice@example.com' },
    { id: 2, naam: 'Bob Peeters', email: 'bob@example.com' },
    { id: 3, naam: 'Charlie Claes', email: 'charlie@example.com' },
    { id: 4, naam: 'Dorien Jacobs', email: 'dorien@example.com' },
    { id: 5, naam: 'Elias Vermeulen', email: 'elias@example.com' },
    { id: 6, naam: 'Fatima Ali', email: 'fatima@example.com' },
    { id: 7, naam: 'Gert Vandenberghe', email: 'gert@example.com' },
    { id: 8, naam: 'Hannah Willems', email: 'hannah@example.com' },
    { id: 9, naam: 'Ibrahim Mohamed', email: 'ibrahim@example.com' },
    { id: 10, naam: 'Julie Maes', email: 'julie@example.com' },
  ];

  constructor(private router: ActivatedRoute) {}

  gebruiker: Gebruiker | undefined = undefined;

  ngOnInit(): void {
    this.router.params.subscribe(
      (p) => (this.gebruiker = this.gebruikers.find((g) => g.id == p['id']))
    );
  }
}
