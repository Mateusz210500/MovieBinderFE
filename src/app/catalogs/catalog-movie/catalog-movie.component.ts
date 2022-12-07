import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MoviesService } from 'src/app/_services/movies.service';

interface Movie {
    id?: string;
    title?: string;
    poster_path?: string
    image?: string
    subtitle?: string
}

@Component({
    selector: 'app-catalog-movie',
    templateUrl: './catalog-movie.component.html',
    styleUrls: ['./catalog-movie.component.scss'],
})
export class CatalogMovieComponent {
    @Input() movieId?: string;
    @Input() catalogId?: string;
    @Input() addButton: boolean = false;
    @Input() removeButton?: boolean = false;
    @Output() movieEvent = new EventEmitter();

    movie: any = {};
    showImage = true;
    constructor(private moviesService: MoviesService, public breakpointObserver: BreakpointObserver) { }

    addedRemovedMovie() {
        this.movieEvent.emit();
    }

    ngOnInit(): void {
        if (this?.movieId)
            this.moviesService.getDetails(this.movieId).subscribe((result: any) => {
                this.movie = result;
            }, (error) => { console.error('An error occurred:', error) })

        this.breakpointObserver
            .observe(['(min-width: 992px)', '(max-width: 992px)', '(max-width: 1200px)'])
            .subscribe((state: BreakpointState) => {
                if (state.breakpoints['(max-width: 992px)']) {
                    this.showImage = false;
                } else {
                    this.showImage = true;
                }
            });
    }
}
