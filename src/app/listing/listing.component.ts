import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../_services/movies.service';

export interface IMovie {
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

    orderObj: any;
    constructor(private route: ActivatedRoute, private moviesService: MoviesService) { }

    ngOnInit() {
        this.route.queryParamMap
            .subscribe((params) => {
                this.orderObj = { ...params.keys, ...params };
                this.moviesService.getSearch(this.orderObj.params.key, 1).subscribe((result: any) => {
                    this.pages = result.total_pages;
                    this.movies = result.results.map((el: any) => {
                        return {
                            image: el.backdrop_path,
                            title: el.title,
                            subtitle: el.overview,

                        }
                    })
                })
            });
    }
}
