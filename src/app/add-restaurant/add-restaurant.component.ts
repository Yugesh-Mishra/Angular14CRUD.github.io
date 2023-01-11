import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {
  restaurantRecords: Restaurant = {
    id: 0,
    name: '',
    owner: '',
    mobile: '',
    email: '',
    location: ''
  }
  constructor(private rs:RestaurantService,private router:Router) { }

  ngOnInit(): void {

  }
  addRecords(){
    this.rs.create(this.restaurantRecords).subscribe(()=>
    {
      this.router.navigate(["/"])
    })
  }

}
