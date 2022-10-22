import { Component, Input } from '@angular/core';

export interface IMovie {
    image: string;
    title?: string;
    subtitle?: string;
}

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html'
})
export class CarouselComponent {
    @Input() movies: IMovie[] = [];
}
