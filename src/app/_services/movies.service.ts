import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface IMovie {
    id: string;
    image: string;
    title?: string;
    subtitle?: string;
}

@Injectable({
    providedIn: 'root'
})
export class MoviesService {
    PATH_OF_API = 'https://api.themoviedb.org/3';
    API_KEY = '360a9b5e0dea438bac3f653b0e73af47';

    constructor(private httpClient: HttpClient) { }

    public getPopular() {
        let params = new HttpParams();
        params = params.append('api_key', this.API_KEY);
        params = params.append('language', 'en-US');
        params = params.append('page', 1);
        params = params.append('region', 'PL');

        return this.httpClient.get(this.PATH_OF_API + "/movie/popular", { params: params })
    }

    public getSearch(query: string, page: number) {
        let params = new HttpParams();
        params = params.append('api_key', this.API_KEY);
        params = params.append('language', 'en-US');
        params = params.append('page', page);
        params = params.append('region', 'PL');
        params = params.append('query', query);

        return this.httpClient.get(this.PATH_OF_API + "/search/movie", { params: params })
    }

    public getVideos(id: number,) {
        let params = new HttpParams();
        params = params.append('api_key', this.API_KEY);
        params = params.append('language', 'en-US');
        params = params.append('id', id);

        return this.httpClient.get(this.PATH_OF_API + `/movie/${id}/videos`, { params: params })
    }

    public getDetails(id: string,) {
        let params = new HttpParams();
        params = params.append('api_key', this.API_KEY);
        params = params.append('language', 'en-US');
        params = params.append('movie_id', id);

        return this.httpClient.get(this.PATH_OF_API + `/movie/${id}`, { params: params })
    }
}
