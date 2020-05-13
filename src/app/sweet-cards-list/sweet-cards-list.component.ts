import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sweet-cards-list',
  templateUrl: './sweet-cards-list.component.html',
  styleUrls: ['./sweet-cards-list.component.css']
})
export class SweetCardsListComponent implements OnInit {

  sweetCardsList = [{ "id": 1, "title": "Apple", "url": "assets/Images/banner1.png", "description": "welcome to sweet shop", "variants": [{ "weight": "100 gms", "price": 25}, { "weight": "500 gms", "price": 125}, { "weight": "600 gms", "price": 150}, { "weight": "1 kg", "price": 250}] }, { "id": 2, "title": "Apple", "url": "assets/Images/AJWAIN.jpg", "description": "welcome to sweet shop", "variants": [{ "weight": "100 gms", "price": 25}, { "weight": "500 gms", "price": 125}, { "weight": "600 gms", "price": 150}, { "weight": "1 kg", "price": 250}]}, { "id": 1, "title": "Apple", "url": "assets/Images/AJWAIN.jpg", "description": "welcome to sweet shop", "variants": [{ "weight": "100 gms", "price": 25}, { "weight": "500 gms", "price": 125}, { "weight": "600 gms", "price": 150}, { "weight": "1 kg", "price": 250}] }, { "id": 1, "title": "Apple", "url": "assets/Images/banner1.png", "description": "welcome to sweet shop", "variants": [{ "weight": "100 gms", "price": 25}, { "weight": "500 gms", "price": 125}, { "weight": "600 gms", "price": 150}, { "weight": "1 kg", "price": 250}] }, { "id": 1, "title": "Apple", "url": "assets/Images/banner1.png", "description": "welcome to sweet shop", "variants": [{ "weight": "100 gms", "price": 25}, { "weight": "500 gms", "price": 125}, { "weight": "600 gms", "price": 150}, { "weight": "1 kg", "price": 250}] } ];

  constructor() { }

  ngOnInit(): void {
  }

}
