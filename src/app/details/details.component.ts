import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../_services/movies.service';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

    videoURL: SafeResourceUrl = '';
    orderObj: any;
    details: any;
    constructor(private route: ActivatedRoute, private moviesService: MoviesService, private domSanitizer: DomSanitizer) { }

    ngOnInit(): void {
        this.route.queryParamMap
            .subscribe((params) => {
                this.orderObj = { ...params.keys, ...params };
                this.moviesService.getVideos(this.orderObj.params.id).subscribe((result: any) => {
                    this.videoURL = this.domSanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${result.results[0].key}?autoplay=1&mute=1`)
                })
                this.moviesService.getDetails(this.orderObj.params.id).subscribe((result: any) => {
                    this.details = result;
                    console.log(this.details)
                })
            })
    }

}
