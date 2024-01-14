import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
<<<<<<< HEAD
import { catchError, tap } from 'rxjs/operators';
import { UserModel } from '../Models/user.model';
import { Router } from '@angular/router';
=======
import { catchError } from 'rxjs/operators';
import { UserModel } from '../Models/user.model';
>>>>>>> d3b5396b17c0f009acca727eefcddc584e5705db

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrlRegister = 'http://localhost:8080/phpapi/UserControllers/RegistryController.php';
  private apiUrlLogin = 'http://localhost:8080/phpapi/UserControllers/LoginController.php';

<<<<<<< HEAD
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;

  constructor(private http: HttpClient, private router: Router) { }
=======
  constructor(private http: HttpClient) { }
>>>>>>> d3b5396b17c0f009acca727eefcddc584e5705db

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
<<<<<<< HEAD
        tap(response => {
          this.isLoggedIn = true;
          this.isAdmin = this.checkIsAdmin(response); // Sprawdź czy użytkownik jest administratorem
          if (this.isAdmin) {
            this.router.navigate(['/Admin']);
          } else {
            // Przekierowanie na /MainGrid, jeśli użytkownik nie jest administratorem
            this.router.navigate(['/MainGrid']);
          }
        }),
=======
>>>>>>> d3b5396b17c0f009acca727eefcddc584e5705db
        catchError(this.handleError)
      );
  }

<<<<<<< HEAD
  logout(): void {
    // Resetuj stan zalogowania i inne zmienne związane z użytkownikiem
    this.isLoggedIn = false;
    this.isAdmin = false;
    this.router.navigate(['/login']);
  }

  checkIsAdmin(response: any): boolean {
    console.log('Weszło User Service ');
    return response.user && response.user.isAdmin === 1 || false;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
=======
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Błąd po stronie klienta
      console.error('An error occurred:', error.error.message);
    } else {
      // Błąd po stronie serwera
>>>>>>> d3b5396b17c0f009acca727eefcddc584e5705db
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${JSON.stringify(error.error)}`);
    }

<<<<<<< HEAD
=======
    // Zwracanie obiektu reprezentującego błąd, który zostanie przechwycony przez operator catchError
>>>>>>> d3b5396b17c0f009acca727eefcddc584e5705db
    return throwError('Something bad happened; please try again later.');
  }
}
