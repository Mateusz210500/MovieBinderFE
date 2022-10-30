import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FileService {
    PATH_OF_API = 'http://localhost:3000/file';
    constructor(private httpClient: HttpClient) { }

    public uploadImage(file: any) {
        const formData: any = new FormData();
        formData.append('file', file);
        return this.httpClient.post(this.PATH_OF_API + "/upload", formData, { withCredentials: true })
    }
}
