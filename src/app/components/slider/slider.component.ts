import { ChangeDetectorRef, Component, Input } from '@angular/core';

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

    constructor(private changeDetectorRef: ChangeDetectorRef) {

    }

    ngOnChanges() {
        for (let i = 0; i < Math.floor(this.movies.length / 3); i++) {
            this.list.push(this.movies.slice(i * 3, i * 3 + 3))
        }
        this.changeDetectorRef.detectChanges()
    }
}
