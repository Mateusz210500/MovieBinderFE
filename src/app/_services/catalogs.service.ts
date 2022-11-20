import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CatalogsService {
    PATH_OF_API = 'http://localhost:3000';
    constructor(private httpClient: HttpClient) { }

    public createCatalog(catalogsData: any) {
        return this.httpClient.post(this.PATH_OF_API + "/catalogs/create", catalogsData, { withCredentials: true })
    }
}