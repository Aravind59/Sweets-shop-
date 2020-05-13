import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sweet-details',
  templateUrl: './sweet-details.component.html',
  styleUrls: ['./sweet-details.component.css']
})
export class SweetDetailsComponent implements OnInit {
  sweetCardDetails: any;
  variants:any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  this.route.params.subscribe(params => {
    
 this.sweetCardDetails = JSON.parse(params['details']);
this.variants = JSON.stringify(params['variants']);
  })
  }


}
