import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { UserModel } from 'src/app/Models/user.model';
import { SharedService } from 'src/app/Services/component-share.service';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

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
    private formBuilder: FormBuilder,
    private router: Router,
    private httpClient: HttpClient
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

  NavigateToRegistration() {
    // Wysyłanie informacji o zmianie komponentu do SharedService
    this.sharedService.changeSelectedComponent('Registration');
  }

  loginUser(): void {
    if (this.loginForm.valid) {
      this.user = { ...this.loginForm.value };

      this.userService.loginUser(this.user).subscribe(
        response => {
          console.log('Użytkownik został pomyślnie zalogowany', response);

          // Przekierowanie użytkownika na podstawie wartości isAdmin
          if (response.user && response.user.isAdmin === 1) {
            console.log('Weszło Login Component');
            this.router.navigate(['/Admin']);
          } else {
            this.router.navigate(['/MainGrid']);
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
