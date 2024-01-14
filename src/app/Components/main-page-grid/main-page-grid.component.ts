// main-page-grid.component.ts
import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/Services/restaurant-service.service';
import { SharedService } from 'src/app/Services/component-share.service';

@Component({
  selector: 'app-main-page-grid',
  templateUrl: './main-page-grid.component.html',
  styleUrls: ['./main-page-grid.component.scss']
})
export class MainPageGridComponent implements OnInit {
  restaurants: any[] = [];
  selectedComponent: string = ''; // Dodaj deklarację selectedComponent

  constructor(private RestaurantService: RestaurantService, private SharedService: SharedService) {}

  ngOnInit() {
    this.RestaurantService.getAllItems().subscribe(data => {
      this.restaurants = data;
      this.SharedService.selectedComponent$.subscribe(component => {
        this.selectedComponent = component;
      });
    });
  }

  navigateToRestaurantDetail(restaurantId: number) {
    // Wysyłanie informacji o zmianie komponentu do SharedService
    this.SharedService.changeSelectedComponent('RestaurantDetail');
    this.RestaurantService.setSelectedRestaurantId(restaurantId);

  }
}
