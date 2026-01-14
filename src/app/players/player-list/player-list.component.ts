import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // <-- esto es lo importante


@Component({
  selector: 'app-player-list',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './player-list.component.html',
  styleUrl: './player-list.component.scss'
})
export class PlayerListComponent {
// player-list.component.ts
players = [
  { id: 1, name: 'LeBron James', photo: 'https://wallpapers.com/images/hd/lebron-james-pictures-qmkwu1yw3wnph76z.jpg' },
  { id: 2, name: 'Stephen Curry', photo: 'https://wallpapers.com/images/hd/steph-curry-doing-viral-hand-gesture-j6vji62924vfmg0v.jpg' },
  { id: 3, name: 'Luka Dončić', photo: 'https://fadeawayworld.net/wp-content/uploads/2025/10/luka-doncic-lakers-timberwolves-nba-1536x1024.jpg' },
  { id: 4, name: 'Giannis Antetokounmpo', photo: 'https://wallpapers.com/images/hd/giannis-antetokounmpo-game-7-s8n5peoi8enwz36e.jpg' },
  { id: 5, name: 'Anthony Edwards', photo: 'https://wallpapers.com/images/hd/basketball-player-anthony-edwards-court-presence-jx9q42e0l8rwgtwt.jpg' },
  { id: 6, name: 'Ja Morant', photo: 'https://wallpapers.com/images/hd/ja-morant-black-background-whc3tswusn1i2ixc.jpg' },
  { id: 7, name: 'Jayson Tatum', photo: 'https://i.pinimg.com/736x/38/51/36/38513691d0d3c011608f7d20630323e6.jpg' },
  { id: 8, name: 'Nikola Jokić', photo: 'https://wallpapers.com/images/hd/smiling-shot-of-nikola-jokic-bbpvea0hwgms1nr4.jpg' },
  { id: 9, name: 'Kevin Durant', photo: 'https://wallpapers.com/images/hd/kevin-durant-nets-g0wvq8ftyso9ro62.jpg' },
  { id: 10, name: 'Kawhi Leonard', photo: 'https://wallpapers.com/images/hd/smiling-cute-kawhi-leonard-m8cezff3nmaoo9db.jpg' },
  { id: 11, name: 'Klay Thompson', photo: 'https://wallpapers.com/images/hd/klay-thompson-perfect-form-1d00jvupup9mpnrn.jpg' },
  { id: 12, name: 'Dirk Nowitzki', photo: 'https://wallpapers.com/images/hd/dirk-nowitzki-back-portrait-14go9z9odkwn7q79.jpg' },
  { id: 13, name: 'Kobe Bryant', photo: 'https://wallpapers.com/images/hd/kobe-bryant-turns-back-4k-5hvgymtbaw7b5pyv.jpg' },
  { id: 14, name: 'Kevin Garnett', photo: 'https://wallpapers.com/images/featured/kevin-garnett-cliaefof7zezv448.jpg' },
  { id: 15, name: 'Michael Jordan', photo: 'https://wallpapers.com/images/hd/sitting-michael-jordan-thxasdy8jqj48f5l.jpg' },
  { id: 16, name: 'Magic Johnson', photo: 'http://wallpapers.com/images/hd/magic-johnson-black-background-t8js6edovmcwhm7j.jpg' },
  { id: 17, name: 'Shaquille O\'Neal', photo: 'https://wallpapers.com/images/hd/shaquille-o-neal-in-the-court-xftvcapy4anpzbkb.jpg' },
  { id: 18, name: 'Larry Bird', photo: 'https://wallpapers.com/images/hd/hands-on-hips-larry-bird-0cmul2gnzqvbd4dt.jpg' },
  { id: 19, name: 'Allen Iverson', photo: 'https://wallpapers.com/images/hd/allen-iverson-with-hands-on-waist-pmubb2gd2041ahxr.jpg' },
  { id: 20, name: 'Tim Duncan', photo: 'https://wallpapers.com/images/hd/tim-duncan-ball-turn-wxqe106un1uhsnhy.jpg' },
  { id: 21, name: 'Karl Malone', photo: 'https://wallpapers.com/images/hd/nba-legends-karl-malone-oxqnis2vjhe1simg.jpg' },
  { id: 22, name: 'Scottie Pippen', photo: 'https://i.pinimg.com/originals/d8/c3/a6/d8c3a6dda151341f9c63c68cf46b9d4f.jpg' },
  { id: 23, name: 'Shai Gilgeous-Alexander', photo: 'https://wallpapers.com/images/hd/shai-gilgeous-alexander-proud-comeback-brooklyn-nets-u92couxhb3eldded.jpg' },
  { id: 24, name: 'Carmelo Anthony', photo: 'https://wallpapers.com/images/hd/carmelo-anthony-nba-2015-photoshoot-7nnp1p12qiudnvhl.jpg' }
];}

