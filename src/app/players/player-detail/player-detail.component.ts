import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-player-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss']
})
export class PlayerDetailComponent {
  playerId!: number;
  player!: any; // luego lo tipamos mejor
  players = [
  { 
    id: 1, 
    name: 'LeBron James', 
    photo: 'https://wallpapers.com/images/hd/lebron-james-pictures-qmkwu1yw3wnph76z.jpg', 
    team: 'Lakers', 
    year: 2003, 
    position: 'SF' 
  },
  { 
    id: 2, 
    name: 'Kevin Durant', 
    photo: 'https://wallpapers.com/images/hd/kevin-durant-nets-g0wvq8ftyso9ro62.jpg', 
    team: 'Nets', 
    year: 2007, 
    position: 'SF' 
  }

];
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.playerId = +params['id']; // el "+" convierte a number
      this.player = this.players.find(p => p.id === this.playerId);
    });
  }
}
