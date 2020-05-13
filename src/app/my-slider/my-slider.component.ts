import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-slider',
  templateUrl: './my-slider.component.html',
  styleUrls: ['./my-slider.component.css']
})
export class MySliderComponent implements OnInit {

  slides = [{ "id": 1, "brand": "Apple", "url": "assets/Images/banner1.png" }, { "id": 2, "brand": "Apple", "url": "assets/Images/AJWAIN.jpg" } ];
  constructor() { }

  ngOnInit(): void {
  }

}
