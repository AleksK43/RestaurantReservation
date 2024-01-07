import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
 public selectedComponent: string = "app-main-page-grid";

 changeComponent(componentName: string) {
  this.selectedComponent = componentName;
}

}
