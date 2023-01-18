import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  alert$ = new Subject<{ message: string, type: string }>();

  addAlert(message: string, type: string) {
    this.alert$.next({ message, type });
  }
}
