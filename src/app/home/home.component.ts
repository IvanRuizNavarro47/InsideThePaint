import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopPlayersComponent } from '../top-players/top-players.component';
import { TopShoesComponent } from '../top-shoes/top-shoes.component'; // <-- AÑADE ESTO
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    TopPlayersComponent,
    TopShoesComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('1s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class HomeComponent {}
