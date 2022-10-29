import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    PATH_OF_API = 'http://localhost:3000';
    constructor(private httpClient: HttpClient) { }

    public getUser() {
        return this.httpClient.get(this.PATH_OF_API + "/users/getId", { withCredentials: true })
    }
}
