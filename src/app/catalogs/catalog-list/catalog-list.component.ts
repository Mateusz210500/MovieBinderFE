import { Component, Input } from '@angular/core';
import { Catalog } from 'src/app/_services/catalogs.service';

@Component({
    selector: 'app-catalog-list',
    templateUrl: './catalog-list.component.html'
})
export class CatalogListComponent {

    @Input() myCatalogs: Catalog[] = []

}
