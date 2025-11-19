import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-shoes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-shoes.component.html',
  styleUrls: ['./top-shoes.component.scss']
})
export class TopShoesComponent {
  topShoes = [
    { name: "Nike Book 1 Sedona", player: "Devin Booker", year: 1985, photo: "assets/book.jpeg" },
    { name: "Nike Zoom KD18", player: "Kevin Durant", year: 2020, photo: "assets/KD18.png" },
    { name: "Adidas Harden Vol.4", player: "James Harden", year: 2019, photo: "assets/harden9.jpg" },
    { name: "Anthony Edwards 2", player: "Anthony Edwards", year: 2020, photo: "assets/ant2.jpg" }
  ];
}
