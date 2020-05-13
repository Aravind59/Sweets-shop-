import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sweet-title',
  templateUrl: './sweet-title.component.html',
  styleUrls: ['./sweet-title.component.css']
})
export class SweetTitleComponent implements OnInit {

  @Input() title;
  constructor() { }

  ngOnInit(): void {
  }

}
