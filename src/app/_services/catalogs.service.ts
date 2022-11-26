import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Catalog {
    id: string;
    title: string;
    description: string;
    filmIds: string[];
    file: string;
    authorId: string;
}

export interface addMovieData {
    movieId?: string,
    catalogId?: string
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

    public getCatalogById(id: number) {
        let params = new HttpParams();
        params = params.append('id', id);
        return this.httpClient.get(this.PATH_OF_API + `/catalogs/${id}`, { withCredentials: true })
    }

    public addMovieToCatalog(data: addMovieData) {
        return this.httpClient.post(this.PATH_OF_API + "/catalogs/addMovie", data, { withCredentials: true })
    }
}