import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestauratnService {
  private apiUrl = 'http://localhost:8080/phpapi/RestaruantsControllers'; 
  constructor(private http: HttpClient) { }
  private selectedRestaurantId: number | null = null; 


  getAllItems(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/AllRestaurantController.php`);
  }

  getRestaurantById(restaurantId: number): Observable<any> {
    if (!restaurantId) {
      throw new Error('Nieprawidłowe ID restauracji');
    }

    return this.http.get<any>(`${this.apiUrl}/SingleRestaurantController.php?id=${restaurantId}`);
  }


  setSelectedRestaurantId(restaurantId: number): void {
    this.selectedRestaurantId = restaurantId;
  }

  getSelectedRestaurantId(): number | null {
    return this.selectedRestaurantId;
  }
}
 