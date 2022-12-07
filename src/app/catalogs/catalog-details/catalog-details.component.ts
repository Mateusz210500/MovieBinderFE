import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogsService } from 'src/app/_services/catalogs.service';
import { ProfileService } from 'src/app/_services/profile.service';

@Component({
    selector: 'app-catalog-details',
    templateUrl: './catalog-details.component.html',
    styleUrls: ['./catalog-details.component.scss']
})
export class CatalogDetailsComponent {
    constructor(private route: ActivatedRoute, private catalogService: CatalogsService, private profileService: ProfileService) { }

    videoURL: string = '';
    orderObj: any;
    details: any;
    movieIds?: string[];
    pages: number = 0;
    page: number = 1;
    isAuthor: boolean = false;
    collectionSize: number = 0;

    addedRemovedMovie() {
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
                    this.profileService.getUser().subscribe((result: any) => {
                        this.isAuthor = result.user.id === this.details.authorId;
                    }, (error) => { console.error('An error occurred:', error) })
                })
            }, (error) => { console.error('An error occurred:', error) })

    }
}
