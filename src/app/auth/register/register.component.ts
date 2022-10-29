import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/_services/auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
    controls: { email: FormControl<string | null>; password: FormControl<string | null>; nickname: FormControl<string | null>; };

    constructor(private userService: UserService, private router: Router) {
        localStorage.removeItem('token')
        this.controls = this.Register.controls;
    }

    Register = new FormGroup({
        email: new FormControl("", [Validators.required, Validators.email]),
        password: new FormControl("", [Validators.required, Validators.minLength(5)]),
        nickname: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(20)])
    })

    register() {
        if (this.Register.valid) {
            this.userService.register(this.Register.value).subscribe((result: any) => {
                this.router.navigate(['login']);
            }, (error) => { console.error('An error occurred:', error) })
        }
    }

}
