import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-orderstatus',
  templateUrl: './orderstatus.component.html',
  styleUrls: ['./orderstatus.component.css']
})
export class OrderstatusComponent implements OnInit {
  orderFrom: any;

  constructor() { }

  ngOnInit(): void {
  }

   order(){
    if(this.orderFrom.value===null)

    alert("Please Insert a Valid Tracking Number");
    else
    alert("Please enter the tracking id")
  }

}
