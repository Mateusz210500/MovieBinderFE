import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/_services/alert.service';
import { UserService } from 'src/app/_services/auth.service';

interface resultData {
    message?: string,
    spaToken?: string
}

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    controls: { email: FormControl<string | null>; password: FormControl<string | null>; };

    constructor(private userService: UserService, private router: Router, private alertService: AlertService) {
        localStorage.removeItem('token');
        this.controls = this.Login.controls;
    }

    Login = new FormGroup({
        email: new FormControl("", [Validators.required, Validators.email]),
        password: new FormControl("", [Validators.required, Validators.minLength(5)])
    })

    login() {
        if (this.Login.valid) {
            this.userService.login(this.Login.value).subscribe((result: resultData) => {
                if (result.spaToken) {
                    this.router.navigate(['']);
                    localStorage.setItem('token', result.spaToken)
                }
            }, (error) => {
                console.error('An error occurred:', error);
                this.alertService.addAlert(error.error.message, 'danger');
            })
        }
    }

}
