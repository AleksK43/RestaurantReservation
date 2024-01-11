import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserModel } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrlRegister = 'http://localhost:8080/phpapi/UserControllers/RegistryController.php';
  private apiUrlLogin = 'http://localhost:8080/phpapi/UserControllers/LoginController.php';

  constructor(private http: HttpClient) { }

  createUser(user: UserModel): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(this.apiUrlRegister, user, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  loginUser(user: UserModel): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(this.apiUrlLogin, user, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Błąd po stronie klienta
      console.error('An error occurred:', error.error.message);
    } else {
      // Błąd po stronie serwera
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${JSON.stringify(error.error)}`);
    }

    // Zwracanie obiektu reprezentującego błąd, który zostanie przechwycony przez operator catchError
    return throwError('Something bad happened; please try again later.');
  }
}
