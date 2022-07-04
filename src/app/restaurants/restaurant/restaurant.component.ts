import { Restaurant } from './restaurant.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  @Input() restaurant: Restaurant;

  



  constructor() { }

  ngOnInit() {
  }

}
