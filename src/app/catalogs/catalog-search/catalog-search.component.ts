import { ChangeDetectorRef, Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovie, MoviesService } from 'src/app/_services/movies.service';

@Component({
    selector: 'app-catalog-search',
    templateUrl: './catalog-search.component.html'
})
export class CatalogSearchComponent {
    @Output() addedMovieEvent = new EventEmitter();

    movies: IMovie[] = [];
    pages: number = 0;
    page: number = 1;
    collectionSize: number = 0;
    movieTitle?: string;
    orderObj: any;

    constructor(private route: ActivatedRoute, private moviesService: MoviesService, private changeDetectorRef: ChangeDetectorRef) { }

    addedMovie() {
        this.addedMovieEvent.emit();
    }

    ngOnInit() {
        this.route.queryParamMap
            .subscribe((params) => {
                this.orderObj = { ...params.keys, ...params };
            }, (error) => { console.error('An error occurred:', error) })
    }

    searchMovies() {
        if (this.movieTitle) {
            this.moviesService.getSearch(this.movieTitle, this.page).subscribe((result: any) => {
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
        }
    }


    loadPage(page: number) {
        this.page = page;
        this.searchMovies()
        console.log(this.page)
    }

}
