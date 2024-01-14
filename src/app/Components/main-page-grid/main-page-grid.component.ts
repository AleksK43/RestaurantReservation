// main-page-grid.component.ts
import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { RestaurantService } from 'src/app/Services/restaurant-service.service';
=======
import { RestauratnService } from 'src/app/Services/restaurant-service.service';
>>>>>>> d3b5396b17c0f009acca727eefcddc584e5705db
import { SharedService } from 'src/app/Services/component-share.service';

@Component({
  selector: 'app-main-page-grid',
  templateUrl: './main-page-grid.component.html',
  styleUrls: ['./main-page-grid.component.scss']
})
export class MainPageGridComponent implements OnInit {
  restaurants: any[] = [];
  selectedComponent: string = ''; // Dodaj deklarację selectedComponent

<<<<<<< HEAD
  constructor(private RestaurantService: RestaurantService, private SharedService: SharedService) {}

  ngOnInit() {
    this.RestaurantService.getAllItems().subscribe(data => {
=======
  constructor(private RestauratnService: RestauratnService, private SharedService: SharedService) {}

  ngOnInit() {
    this.RestauratnService.getAllItems().subscribe(data => {
>>>>>>> d3b5396b17c0f009acca727eefcddc584e5705db
      this.restaurants = data;
      this.SharedService.selectedComponent$.subscribe(component => {
        this.selectedComponent = component;
      });
    });
  }

  navigateToRestaurantDetail(restaurantId: number) {
    // Wysyłanie informacji o zmianie komponentu do SharedService
    this.SharedService.changeSelectedComponent('RestaurantDetail');
<<<<<<< HEAD
    this.RestaurantService.setSelectedRestaurantId(restaurantId);
=======
    this.RestauratnService.setSelectedRestaurantId(restaurantId);
>>>>>>> d3b5396b17c0f009acca727eefcddc584e5705db

  }
}
