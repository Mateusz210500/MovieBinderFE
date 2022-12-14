import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, Input } from '@angular/core';

export interface IMovie {
    id: number;
    image: string;
    title?: string;
    subtitle?: string;
}


@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
    @Input() movies: IMovie[] = [];
    list: IMovie[][] = [];

    constructor(public breakpointObserver: BreakpointObserver) { }

    ngOnInit() {
        this.breakpointObserver
            .observe(['(min-width: 992px)', '(max-width: 992px)', '(max-width: 1200px)'])
            .subscribe((state: BreakpointState) => {
                if (state.breakpoints['(max-width: 992px)']) {
                    this.setMovieList(1)
                } else {
                    this.setMovieList(3)
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
