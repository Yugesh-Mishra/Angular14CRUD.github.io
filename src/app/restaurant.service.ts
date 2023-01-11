import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurant } from './restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http:HttpClient) { }

  //get all records
  getAll():Observable<Restaurant[]>{
    return this.http.get<Restaurant[]>("http://localhost:3000/restaurants");
  }

  //add records
  create(payload:Restaurant):Observable<Restaurant>{
    return this.http.post<Restaurant>("http://localhost:3000/restaurants",payload);
  }

  //get records by id
  getbyId(id:number):Observable<Restaurant>{
    return this.http.get<Restaurant>(`http://localhost:3000/restaurants/${id}`);
  }

  //update records
  update(payload:Restaurant):Observable<Restaurant>{
    return this.http.put<Restaurant>(`http://localhost:3000/restaurants/${payload.id}`,payload);
  }

  delete(id:number){
     return this.http.delete(`http://localhost:3000/restaurants/${id}`);
  }
}
