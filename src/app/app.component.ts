import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { JwtService } from './_services/jwt.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    showHeaderFooter = true;

    constructor(private router: Router, private jwtService: JwtService) {
        this.router.events.subscribe((event: any) => {
            if (event instanceof NavigationEnd) {
                if (event.url === '/login' || event.url === '/register') {
                    this.showHeaderFooter = false;
                } else {
                    this.showHeaderFooter = true;
                }
                this.checkTokenExpireDate();
            }
        });
    }

    private checkTokenExpireDate(): void{
        const token = localStorage.getItem('token');
        const decodedToken: any =  token && this.jwtService.DecodeToken(token);
        const expireDate = token && decodedToken ? new Date(decodedToken.exp * 1000) : null;
        const currentDate = new Date();

        if(expireDate && expireDate < currentDate ){
            this.router.navigate(['login']);
        }
    }
}
