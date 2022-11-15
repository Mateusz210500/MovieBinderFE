import { Component } from '@angular/core';
import { IMovie } from '../listing/listing.component';
import { MoviesService } from '../_services/movies.service';

@Component({
    selector: 'app-create-catalog',
    templateUrl: './create-catalog.component.html',
    styleUrls: ['./create-catalog.component.scss']
})
export class CreateCatalogComponent {

    constructor(private moviesService: MoviesService) { }

    movies: IMovie[] = [];
    key: string = ""

    ngOnChanges(): void {
        this.updateMovies('test')
        console.log(this)
    }

    updateMovies(key: string) {
        this.moviesService.getSearch(key, 1).subscribe((result: any) => {
            this.movies = result.results.map((el: any) => {
                return {
                    id: el.id,
                    image: el.backdrop_path,
                    title: el.title,
                    subtitle: el.overview,
                }
            }).slice(0, 9)
        })
    }
}
