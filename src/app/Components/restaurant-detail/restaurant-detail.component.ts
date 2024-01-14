// restaurant-detail.component.ts
import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { RestaurantService } from 'src/app/Services/restaurant-service.service';
=======
import { RestauratnService } from 'src/app/Services/restaurant-service.service';
>>>>>>> d3b5396b17c0f009acca727eefcddc584e5705db

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss']
})
export class RestaurantDetailComponent implements OnInit {
  selectedRestaurantId: number | null = null;
  restaurantDetails: any; 

<<<<<<< HEAD
  constructor(private RestaurantService: RestaurantService) {}

  ngOnInit() {
    // Pobranie ID wybranej restauracji z serwisu
    this.selectedRestaurantId = this.RestaurantService.getSelectedRestaurantId();

    if (this.selectedRestaurantId) {
      // Pobranie szczegółów restauracji na podstawie ID
      this.RestaurantService.getRestaurantById(this.selectedRestaurantId).subscribe(data => {
=======
  constructor(private RestauratnService: RestauratnService) {}

  ngOnInit() {
    // Pobranie ID wybranej restauracji z serwisu
    this.selectedRestaurantId = this.RestauratnService.getSelectedRestaurantId();

    if (this.selectedRestaurantId) {
      // Pobranie szczegółów restauracji na podstawie ID
      this.RestauratnService.getRestaurantById(this.selectedRestaurantId).subscribe(data => {
>>>>>>> d3b5396b17c0f009acca727eefcddc584e5705db
        this.restaurantDetails = data;
      });
    }
  }
}
