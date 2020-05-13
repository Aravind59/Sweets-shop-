import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sweet-description',
  templateUrl: './sweet-description.component.html',
  styleUrls: ['./sweet-description.component.css']
})
export class SweetDescriptionComponent implements OnInit {

  @Input() description;
  constructor() { }

  ngOnInit(): void {
  }

}
