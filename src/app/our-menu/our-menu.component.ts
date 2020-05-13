import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-our-menu',
  templateUrl: './our-menu.component.html',
  styleUrls: ['./our-menu.component.css']
})
export class OurMenuComponent implements OnInit {

  sweetCardsList = [{ "id": 1, "title": "Apple", "url": "assets/Images/banner1.png", "description": "welcome to sweet shop", "variants": [{ "weight": "100 gms", "price": 25}, { "weight": "500 gms", "price": 125}, { "weight": "600 gms", "price": 150}, { "weight": "1 kg", "price": 250}] }, { "id": 2, "title": "Apple", "url": "assets/Images/AJWAIN.jpg", "description": "welcome to sweet shop", "variants": [{ "weight": "100 gms", "price": 25}, { "weight": "500 gms", "price": 125}, { "weight": "600 gms", "price": 150}, { "weight": "1 kg", "price": 250}]}, { "id": 1, "title": "Apple", "url": "assets/Images/AJWAIN.jpg", "description": "welcome to sweet shop", "variants": [{ "weight": "100 gms", "price": 25}, { "weight": "500 gms", "price": 125}, { "weight": "600 gms", "price": 150}, { "weight": "1 kg", "price": 250}] }, { "id": 1, "title": "Apple", "url": "assets/Images/banner1.png", "description": "welcome to sweet shop", "variants": [{ "weight": "100 gms", "price": 25}, { "weight": "500 gms", "price": 125}, { "weight": "600 gms", "price": 150}, { "weight": "1 kg", "price": 250}] }, { "id": 1, "title": "Apple", "url": "assets/Images/banner1.png", "description": "welcome to sweet shop", "variants": [{ "weight": "100 gms", "price": 25}, { "weight": "500 gms", "price": 125}, { "weight": "600 gms", "price": 150}, { "weight": "1 kg", "price": 250}] } ];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  displayDetails(sweetCard){
    console.log(sweetCard);
this.router.navigate(['/details', {details: JSON.stringify(sweetCard), variants: JSON.stringify(sweetCard)}]);
  }
}
