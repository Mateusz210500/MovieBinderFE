import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    PATH_OF_API = 'http://localhost:3000';
    constructor(private httpClient: HttpClient) { }

    public login(loginData: any) {
        return this.httpClient.post(this.PATH_OF_API + "/auth/signin", loginData, { withCredentials: true })
    }

    public register(registerData: any) {
        return this.httpClient.post(this.PATH_OF_API + "/auth/signup", registerData, { withCredentials: true })
    }

    public logout() {
        return this.httpClient.get(this.PATH_OF_API + "/auth/signout", { withCredentials: true })
    }

}
