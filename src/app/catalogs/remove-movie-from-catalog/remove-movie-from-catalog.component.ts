import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CatalogsService } from 'src/app/_services/catalogs.service';

@Component({
    selector: 'app-remove-movie-from-catalog',
    templateUrl: './remove-movie-from-catalog.component.html',
    styleUrls: ['./remove-movie-from-catalog.component.scss']
})
export class RemoveMovieFromCatalogComponent {
    @Input() movieId?: string;
    @Input() catalogId?: string;
    @Output() movieEvent = new EventEmitter();

    constructor(private catalogService: CatalogsService) { }

    remove() {
        this.catalogService.removeMovieFromCatalog({
            movieId: this.movieId?.toString(),
            catalogId: this.catalogId,
        }).subscribe(() => { this.movieEvent.emit(); }, (error) => { console.error('An error occurred:', error) })
    }

}
