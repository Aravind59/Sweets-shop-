import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-check-out-modal',
  templateUrl: './check-out-modal.component.html',
  styleUrls: ['./check-out-modal.component.css']
})
export class CheckOutModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CheckOutModalComponent>) { }

  ngOnInit(): void {
  }

}
