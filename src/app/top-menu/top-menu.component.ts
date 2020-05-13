import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { MyCartComponent } from '../my-cart/my-cart.component';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  
  sweetCardsList = [{ "id": 1, "title": "Apple", "url": "assets/Images/banner1.png", "description": "welcome to sweet shop", "variants": [{ "weight": "100 gms", "price": 25}, { "weight": "500 gms", "price": 125}, { "weight": "600 gms", "price": 150}, { "weight": "1 kg", "price": 250}] }, { "id": 2, "title": "Apple", "url": "assets/Images/Sweet1.jpg", "description": "welcome to sweet shop", "variants": [{ "weight": "100 gms", "price": 25}, { "weight": "500 gms", "price": 125}, { "weight": "600 gms", "price": 150}, { "weight": "1 kg", "price": 250}]}, { "id": 1, "title": "Apple", "url": "assets/Images/AJWAIN.jpg", "description": "welcome to sweet shop", "variants": [{ "weight": "100 gms", "price": 25}, { "weight": "500 gms", "price": 125}, { "weight": "600 gms", "price": 150}, { "weight": "1 kg", "price": 250}] }];


  constructor(private dialog: MatDialog) {
    
   }

  ngOnInit(): void {
  }

  openMyCartDialog() {
    const dialogRef = this.dialog.open(MyCartComponent, {
      height: "80%",
      hasBackdrop: true,
      
      direction: "ltr",
      data: this.sweetCardsList,
      disableClose: false,
    });
    dialogRef.afterClosed().subscribe(() => {
      console.log("The dialog was closed");
      
    });
  }
}
