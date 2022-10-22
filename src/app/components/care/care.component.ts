import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-care',
  templateUrl: './care.component.html',
  styleUrls: ['./care.component.css']
})
export class CareComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  contact()
  {
    this.route.navigateByUrl('contact');
  }
}
