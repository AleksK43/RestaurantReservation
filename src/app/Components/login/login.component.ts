import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { UserModel } from 'src/app/Models/user.model';
import { SharedService } from 'src/app/Services/component-share.service';

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
    private formBuilder: FormBuilder
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

  NavigateToRegistration() {
    // Wysyłanie informacji o zmianie komponentu do SharedService
    this.sharedService.changeSelectedComponent('Registration');
  }

  loginUser(): void {
    if (this.loginForm.valid) {
      // Jeśli formularz jest poprawny, wykonaj logikę logowania
      this.user = { ...this.loginForm.value }; // Skopiuj wartości z formularza do obiektu user

      this.userService.loginUser(this.user).subscribe(
        response => {
          console.log('Użytkownik został pomyślnie zalogowany', response);

          // Sprawdź tutaj czy użytkownik jest administratorem
          if (response.user && response.user.IsAdmin) {
            // Użytkownik jest administratorem, wykonaj odpowiednie akcje
            console.log('Użytkownik jest administratorem');
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
