import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../_services/movies.service';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

    constructor(private moviesService: MoviesService) { }

    movies = [];
    carouselMovies = [];
    sliderMovies = [];

    ngOnInit(): void {
        this.moviesService.getPopular().subscribe((result: any) => {
            this.movies = result.results
            this.carouselMovies = result.results.slice(0, 3).map((el: any) => {
                return {
                    id: el.id,
                    image: el.backdrop_path,
                    title: el.title,
                    subtitle: el.overview,

                }
            })
            this.sliderMovies = result.results.slice(0, 9).map((el: any) => {
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
