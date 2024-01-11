import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { MainPageGridComponent } from './Components/main-page-grid/main-page-grid.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactComponent } from './Components/contact/contact.component';
import { LoginComponent } from './Components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantDetailComponent } from './Components/restaurant-detail/restaurant-detail.component';
import { SharedService } from './Services/component-share.service';
import { RegistrationComponent } from './Components/registration/registration.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MainPageGridComponent,
    AboutUsComponent,
    ContactComponent,
    LoginComponent,
    RestaurantDetailComponent,
    RegistrationComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
  ],
  providers: [SharedService],
  bootstrap: [AppComponent],
})
export class AppModule {}
