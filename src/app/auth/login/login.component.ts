import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';

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

    constructor(private userService: UserService, private router: Router) {
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
                    console.log(result, result.spaToken)
                    this.router.navigate(['']);
                    localStorage.setItem('token', result.spaToken)
                }
            })
        }
    }

}
