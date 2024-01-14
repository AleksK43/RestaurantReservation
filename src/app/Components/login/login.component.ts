import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { UserModel } from 'src/app/Models/user.model';
import { SharedService } from 'src/app/Services/component-share.service';
<<<<<<< HEAD
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
=======
>>>>>>> d3b5396b17c0f009acca727eefcddc584e5705db

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  user: UserModel = {
    name: '',
    surname: '',
    email: '',
    password: '',
    isAdmin: false
  };
  selectedComponent: string = '';
  loginError: boolean = false;

  constructor(
    private userService: UserService,
    private sharedService: SharedService,
<<<<<<< HEAD
    private formBuilder: FormBuilder,
    private router: Router,
    private httpClient: HttpClient
=======
    private formBuilder: FormBuilder
>>>>>>> d3b5396b17c0f009acca727eefcddc584e5705db
  ) { }

  ngOnInit() {
    this.sharedService.selectedComponent$.subscribe(component => {
      this.selectedComponent = component;
    });

    // Inicjalizacja formularza
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

<<<<<<< HEAD
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${JSON.stringify(error.error)}`);
    }

    return throwError('Something bad happened; please try again later.');
  }

=======
>>>>>>> d3b5396b17c0f009acca727eefcddc584e5705db
  NavigateToRegistration() {
    // Wysyłanie informacji o zmianie komponentu do SharedService
    this.sharedService.changeSelectedComponent('Registration');
  }

  loginUser(): void {
    if (this.loginForm.valid) {
<<<<<<< HEAD
      this.user = { ...this.loginForm.value };
=======
      // Jeśli formularz jest poprawny, wykonaj logikę logowania
      this.user = { ...this.loginForm.value }; // Skopiuj wartości z formularza do obiektu user
>>>>>>> d3b5396b17c0f009acca727eefcddc584e5705db

      this.userService.loginUser(this.user).subscribe(
        response => {
          console.log('Użytkownik został pomyślnie zalogowany', response);

<<<<<<< HEAD
          // Przekierowanie użytkownika na podstawie wartości isAdmin
          if (response.user && response.user.isAdmin === 1) {
            console.log('Weszło Login Component');
            this.router.navigate(['/Admin']);
          } else {
            this.router.navigate(['/MainGrid']);
=======
          // Sprawdź tutaj czy użytkownik jest administratorem
          if (response.user && response.user.IsAdmin) {
            // Użytkownik jest administratorem, wykonaj odpowiednie akcje
            console.log('Użytkownik jest administratorem');
>>>>>>> d3b5396b17c0f009acca727eefcddc584e5705db
          }

          // Zresetuj formularz i ukryj komunikat o błędzie
          this.loginForm.reset();
          this.loginError = false;
        },
        error => {
          console.error('Błąd podczas logowania', error);

          // Wyświetl komunikat o błędzie
          this.loginError = true;
        }
      );
    }
  }
}
