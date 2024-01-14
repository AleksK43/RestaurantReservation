import { Component } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { SharedService } from 'src/app/Services/component-share.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  user: any = {};
  selectedComponent: string = '';
  registrationSuccess: boolean = false;
  registrationError: boolean = false;

  constructor(private userService: UserService, private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.selectedComponent$.subscribe(component => {
      this.selectedComponent = component;
    });
  }

  registerUser(): void {
    this.userService.createUser(this.user).subscribe(
      response => {
        console.log('Użytkownik został pomyślnie utworzony', response);
        this.registrationSuccess = true;
        this.registrationError = false;
      },
      error => {
        console.error('Błąd podczas tworzenia użytkownika', error);
        this.registrationSuccess = false;
        this.registrationError = true;
      }
    );
  }
}
