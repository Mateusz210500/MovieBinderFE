import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    PATH_OF_API = 'http://localhost:3000/auth';
    constructor(private httpClient: HttpClient) { }

    public login(loginData: any) {
        return this.httpClient.post(this.PATH_OF_API + "/signin", loginData, { withCredentials: true })
    }

    public register(registerData: any) {
        return this.httpClient.post(this.PATH_OF_API + "/signup", registerData, { withCredentials: true })
    }

    public logout() {
        return this.httpClient.get(this.PATH_OF_API + "/signout", { withCredentials: true })
    }
}
