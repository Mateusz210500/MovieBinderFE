import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlertService } from 'src/app/_services/alert.service';

@Component({
  selector: 'app-alert',
  template: `
        <div *ngFor="let alert of alerts" class=" fixed-bottom d-flex justify-content-end">
        <div class="alert alert-dismissible col-xs-12 col-sm-6 col-md-5 col-lg-3 m-2 alert-{{ alert.type }}">
        {{ alert.message }}
        <button type="button" class="btn-close" (click)="removeAlert(alert)">
        </button>
        </div>
        </div>
  `
})
export class AlertTopLeftComponent implements OnInit, OnDestroy {
  alerts: any[] = [];
  private alertSubscription: any;

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertSubscription = this.alertService.alert$.subscribe(alert => {
      this.alerts.push(alert);
    setTimeout(()=>{
        this.removeAlert(alert)
    }, 2000);
    });
  }

  removeAlert(alert: any) {
    const index = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }

  ngOnDestroy() {
    this.alertSubscription.unsubscribe();
  }
}
