import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {

  sweetCardsList: any[];
  constructor(public dialogRef: MatDialogRef<MyCartComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.sweetCardsList = data
   }
  ngOnInit(): void {
  }

}
