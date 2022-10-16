import { Component, NgZone } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    showHeader = true;
    constructor(private zone: NgZone, private router: Router) {
        this.router.events.subscribe((event: any) => {
            if (event instanceof NavigationEnd) {
                if (event.url === '/login' || event.url === '/register') {
                    this.showHeader = false;
                } else {
                    this.showHeader = true;
                }
            }
        });
    }
}
