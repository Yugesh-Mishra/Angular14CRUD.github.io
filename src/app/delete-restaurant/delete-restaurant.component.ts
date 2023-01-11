import { createInjectableType } from '@angular/compiler';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-delete-restaurant',
  templateUrl: './delete-restaurant.component.html',
  styleUrls: ['./delete-restaurant.component.css']
})
export class DeleteRestaurantComponent {

  constructor(public dialogRef: MatDialogRef<DeleteRestaurantComponent>,private rs:RestaurantService
    ,@Inject(MAT_DIALOG_DATA) public data:any) {   }

  confirmDelete(){
    this.rs.delete(this.data.id).subscribe(()=>{
       this.dialogRef.close(this.data.id)
    })
  }

}
