import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/_services/auth.service';

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {

    constructor(private userService: UserService, private router: Router) {
    }

    logout() {
        this.userService.logout().subscribe((result: any) => {
            if (result !== null) {
                localStorage.removeItem('token')
                this.router.navigate(['login']);
            }
        }, (error) => { console.error('An error occurred:', error) })
    }

}
