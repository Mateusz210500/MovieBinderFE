import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CatalogsService } from 'src/app/_services/catalogs.service';

@Component({
    selector: 'app-add-movie-to-catalog',
    templateUrl: './add-movie-to-catalog.component.html'
})
export class AddMovieToCatalogComponent {
    @Input() movieId?: string;
    @Input() catalogId?: string;
    @Output() movieEvent = new EventEmitter();

    constructor(private catalogService: CatalogsService) { }

    add() {
        this.catalogService.addMovieToCatalog({
            movieId: this.movieId?.toString(),
            catalogId: this.catalogId,
        }).subscribe(() => { this.movieEvent.emit(); }, (error) => { console.error('An error occurred:', error) })
    }
}
