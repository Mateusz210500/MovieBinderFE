import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    showHeaderFooter = true;

    constructor(private router: Router) {
        this.router.events.subscribe((event: any) => {
            if (event instanceof NavigationEnd) {
                if (event.url === '/login' || event.url === '/register') {
                    this.showHeaderFooter = false;
                } else {
                    this.showHeaderFooter = true;
                }
            }
        });
    }
}
