import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Catalog {
    id: string;
    title: string;
    description: string;
    filmIds: string[];
    file: string;
    authorId: string;
}

@Injectable({
    providedIn: 'root'
})
export class CatalogsService {
    PATH_OF_API = 'http://localhost:3000';
    constructor(private httpClient: HttpClient) { }

    public createCatalog(catalogsData: any) {
        return this.httpClient.post(this.PATH_OF_API + "/catalogs/create", catalogsData, { withCredentials: true })
    }

    public getMyCatalogs() {
        return this.httpClient.get(this.PATH_OF_API + "/catalogs/getMyCatalogs", { withCredentials: true })
    }
}