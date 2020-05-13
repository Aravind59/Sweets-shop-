import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sweet-variation',
  templateUrl: './sweet-variation.component.html',
  styleUrls: ['./sweet-variation.component.css']
})
export class SweetVariationComponent implements OnInit {
 @Input() variants;
 defaultvalue: any;
  constructor() { }

  ngOnInit(): void {
    this.defaultvalue = this.variants[0].weight;
    
  }

}
