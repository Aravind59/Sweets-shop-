import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sweet-card',
  templateUrl: './sweet-card.component.html',
  styleUrls: ['./sweet-card.component.css']
})
export class SweetCardComponent implements OnInit {
  @Input() sweetCardDetails;
  constructor() { }

  ngOnInit(): void {
    console.log(this.sweetCardDetails);
  }

}
