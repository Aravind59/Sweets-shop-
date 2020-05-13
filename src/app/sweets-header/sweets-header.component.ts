import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sweets-header',
  templateUrl: './sweets-header.component.html',
  styleUrls: ['./sweets-header.component.css']
})
export class SweetsHeaderComponent implements OnInit {
@Input() header1;
@Input() header2;
  constructor() { }

  ngOnInit(): void {
  }

}
