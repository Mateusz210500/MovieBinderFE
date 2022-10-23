import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MoviesService } from '../_services/movies.service';

export interface IMovie {
    id: number;
    image: string;
    title?: string;
    subtitle?: string;
}

@Component({
    selector: 'app-listing',
    templateUrl: './listing.component.html',
    styleUrls: ['./listing.component.scss']
})
export class ListingComponent {

    movies: IMovie[] = [];
    pages: number = 0;
    page: number = 1;
    collectionSize: number = 0;
    orderObj: any;

    constructor(private route: ActivatedRoute, private moviesService: MoviesService, private router: Router) { }

    ngOnInit() {
        this.route.queryParamMap
            .subscribe((params) => {
                this.orderObj = { ...params.keys, ...params };
                this.moviesService.getSearch(this.orderObj.params.key, this.orderObj.params.page).subscribe((result: any) => {
                    this.pages = result.total_pages;
                    this.collectionSize = result.total_results;
                    this.movies = result.results.map((el: any) => {
                        return {
                            id: el.id,
                            image: el.backdrop_path,
                            title: el.title,
                            subtitle: el.overview,

                        }
                    })
                })
            });
    }

    loadPage(page: number) {
        const queryParams: Params = { page: page };
        this.router.navigate(
            [],
            {
                relativeTo: this.route,
                queryParams: queryParams,
                queryParamsHandling: 'merge',
            });
    }
}
