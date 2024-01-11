import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private selectedComponentSource = new BehaviorSubject<string>('app-main-page-grid');
  selectedComponent$ = this.selectedComponentSource.asObservable();

  changeSelectedComponent(componentName: string) {
    this.selectedComponentSource.next(componentName);
  }
}