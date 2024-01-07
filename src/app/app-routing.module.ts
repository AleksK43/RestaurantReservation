import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { MainPageGridComponent } from './Components/main-page-grid/main-page-grid.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';

const routes: Routes = [
  {path: 'HomePage', component:HomePageComponent},
  { path: 'MainGrid', component: MainPageGridComponent},
  { path: 'AboutUs', component: AboutUsComponent},
  { path: '', component: HomePageComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }