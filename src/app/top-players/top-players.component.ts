import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-players',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-players.component.html',
  styleUrls: ['./top-players.component.scss']
})
export class TopPlayersComponent {
  topPlayers = [
    { name: "Luka Dončić", pts: 33.4, reb: 9.8, ast: 9.1, photo: "luka.jpg" },
    { name: "Giannis Antetokounmpo", pts: 30.2, reb: 11.5, ast: 5.8, photo: "giannis.jpg" },
    { name: "Stephen Curry", pts: 31.1, reb: 5.1, ast: 6.4, photo: "curry.jpg" },
    { name: "LeBron James", pts: 28.9, reb: 7.8, ast: 8.3, photo: "LeBron.png" }
  ];
}
