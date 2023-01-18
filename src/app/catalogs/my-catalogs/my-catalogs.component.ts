import { Component } from '@angular/core';
import { Catalog, CatalogsService } from 'src/app/_services/catalogs.service';

@Component({
    selector: 'app-my-catalogs',
    templateUrl: './my-catalogs.component.html'
})
export class MyCatalogsComponent {
    myCatalogs: Catalog[] = []
    constructor(private catalogsService: CatalogsService) {
    }

    ngOnInit() {
        this.getCatalogs();
    }

    createdNewCatalog() {
        this.getCatalogs();
    }

    getCatalogs(): void {
        this.catalogsService.getMyCatalogs().subscribe((result: any) => {
            this.myCatalogs = result.myCatalogs;
        }, (error) => { console.error('An error occurred:', error) })
    }

}
