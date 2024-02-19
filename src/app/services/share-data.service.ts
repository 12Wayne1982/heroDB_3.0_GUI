import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ShareDataService {
  private dataSource = new BehaviorSubject<any>('default data');
  currentData = this.dataSource.asObservable();

  constructor(private heroRouter: Router) {}
  changeData(data: any, routerLink: string) {
    this.dataSource.next(data);
    this.heroRouter.navigateByUrl(routerLink);
  }
}
