// main-page-grid.component.ts
import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/Services/restaurant-service.service';
import { SharedService } from 'src/app/Services/component-share.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-main-page-grid',
  templateUrl: './main-page-grid.component.html',
  styleUrls: ['./main-page-grid.component.scss']
  
})
export class MainPageGridComponent implements OnInit {
  restaurants: any[] = [];
  selectedComponent: string = ''; 
  selectedRestaurant: any = null

  constructor(private RestaurantService: RestaurantService,
    private SharedService: SharedService,
    private router:Router,
    private userService: UserService) {}

  ngOnInit() {
    this.RestaurantService.getAllItems().subscribe(data => {
      this.restaurants = data;
      this.SharedService.selectedComponent$.subscribe(component => {
        this.selectedComponent = component;
      });
    });
  }

  navigateToRestaurantDetail(restaurantId: any) {
    // Wysyłanie informacji o zmianie komponentu do SharedService
    this.SharedService.changeSelectedComponent('RestaurantDetail');
    this.RestaurantService.setSelectedRestaurantId(restaurantId);
  }

  
  navigateToReservation(restaurant: any){
    if(this.userService.isUserLoggedIn())
    {
    const userId = localStorage.getItem('userID'); 
    this.SharedService.setSelectedReservationData({ userId, restaurantId: restaurant.ID });
    console.log(userId, restaurant.ID)
    this.router.navigate(['/reservation'])
    }else 
    {
      alert ('musisz być zalogowany aby zarezerwować miejsce')
      this.router.navigate(['/login'])
    }
  }

}
  
