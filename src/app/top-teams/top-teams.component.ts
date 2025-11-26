import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-top-teams',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-teams.component.html',
  styleUrl: './top-teams.component.scss'
})
export class TopTeamsComponent {

  nbaHistory = [
  {
    title: "Los Lakers de los 80",
    summary: "Una era dorada de los Lakers con Magic Johnson y Kareem Abdul-Jabbar. Cinco campeonatos en la década.",
    photo: "assets/lakers80s.jpg",
    link: "#"
  },
  {
    title: "Chicago Bulls 1995-1998",
    summary: "El dominio de Michael Jordan y Scottie Pippen que marcó la historia. Tres campeonatos consecutivos en dos ocasiones.",
    photo: "assets/bulls90s.jpg",
    link: "#"
  },
  {
    title: "Golden State Warriors ",
    summary: "El famoso recorrido de los Warriors con Stephen Curry, klay Thompson , Kevin Durant y Draymond Green. Con un record de 73-9 en la temporada 2015-2016.",
    photo: "assets/warrios016.jpg",
    link: "#"
  }
];


}
