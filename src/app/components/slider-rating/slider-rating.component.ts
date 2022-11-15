import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, Input } from '@angular/core';

export interface IMovie {
    id: number;
    image: string;
    title?: string;
    subtitle?: string;
    rating: number
}

@Component({
    selector: 'app-slider-rating',
    templateUrl: './slider-rating.component.html',
    styleUrls: ['./slider-rating.component.scss']
})
export class SliderRatingComponent {
    @Input() movies: any = [];
    list: IMovie[][] = [];

    constructor(public breakpointObserver: BreakpointObserver) { }

    ngOnInit() {
        this.breakpointObserver
            .observe(['(min-width: 992px)', '(max-width: 992px)', '(max-width: 1200px)'])
            .subscribe((state: BreakpointState) => {
                if (state.breakpoints['(max-width: 992px)']) {
                    this.setMovieList(2)
                } else if (state.breakpoints['(min-width: 992px)'] && state.breakpoints['(max-width: 1200px)']) {
                    this.setMovieList(4)
                } else {
                    this.setMovieList(6)
                }
            });
    }

    setMovieList(numberOfCarts: number) {
        this.list = []
        for (let i = 0; i < Math.floor(this.movies.length / numberOfCarts); i++) {
            this.list.push(this.movies.slice(i * numberOfCarts, i * numberOfCarts + numberOfCarts))
        }
    }
}
