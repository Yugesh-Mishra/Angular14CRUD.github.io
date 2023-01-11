import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-edit-restaurant',
  templateUrl: './edit-restaurant.component.html',
  styleUrls: ['./edit-restaurant.component.css']
})
export class EditRestaurantComponent {
  restaurantRecords: Restaurant = {
    id: 0,
    name: '',
    owner: '',
    mobile: '',
    email: '',
    location: ''
  }

  constructor(private rs: RestaurantService, private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params => {
      let id = Number(params.get('id'));
      this.getbyId(id)
    }))
  }

  getbyId(id: number) {
    this.rs.getbyId(id).subscribe((data) => {
      this.restaurantRecords = data;
    })
  }

  updateRecords(){
    this.rs.update(this.restaurantRecords).subscribe(()=>{
    this.router.navigate(['/']);
    })
  }
}
