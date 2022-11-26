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

    createdNewCatalog() {
        this.getCatalogs();
    }

    ngOnInit() {
        this.getCatalogs();
    }

    getCatalogs(): void {
        this.catalogsService.getMyCatalogs().subscribe((result: any) => {
            this.myCatalogs = result.myCatalogs
            console.log(this.myCatalogs[0].title)
        }, (error) => { console.error('An error occurred:', error) })
    }

}
