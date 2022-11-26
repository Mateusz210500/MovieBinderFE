import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogsService } from 'src/app/_services/catalogs.service';
import { MoviesService } from 'src/app/_services/movies.service';

@Component({
    selector: 'app-catalog-details',
    templateUrl: './catalog-details.component.html',
    styleUrls: ['./catalog-details.component.scss']
})
export class CatalogDetailsComponent {
    constructor(private route: ActivatedRoute, private catalogService: CatalogsService, private moviesService: MoviesService) { }

    videoURL: string = '';
    orderObj: any;
    details: any;
    movieIds?: string[];
    pages: number = 0;
    page: number = 1;
    collectionSize: number = 0;

    addedMovie() {
        this.catalogService.getCatalogById(this.orderObj.params?.id).subscribe((result: any) => {
            this.details = result.foundCatalog
            this.movieIds = this.details?.filmIds
        })
    }

    ngOnInit(): void {
        console.log(this)
        this.route.queryParamMap
            .subscribe((params) => {
                this.orderObj = { ...params.keys, ...params };
                this.catalogService.getCatalogById(this.orderObj.params?.id).subscribe((result: any) => {
                    this.details = result.foundCatalog
                    this.movieIds = this.details?.filmIds
                })
            }, (error) => { console.error('An error occurred:', error) })
    }


}
