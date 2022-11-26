import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CatalogsService } from 'src/app/_services/catalogs.service';

@Component({
    selector: 'app-add-movie-to-catalog',
    templateUrl: './add-movie-to-catalog.component.html'
})
export class AddMovieToCatalogComponent {
    @Input() movieId?: string;
    @Input() catalogId?: string;
    @Output() addedMovieEvent = new EventEmitter();

    constructor(private catalogService: CatalogsService) { }

    add() {
        console.log(this.movieId, this.catalogId)
        this.catalogService.addMovieToCatalog({
            movieId: this.movieId?.toString(),
            catalogId: this.catalogId,
        }).subscribe(() => { this.addedMovieEvent.emit(); }, (error) => { console.error('An error occurred:', error) })
    }
}
