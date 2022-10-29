import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../_services/movies.service';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

    videoURL: string = '';
    orderObj: any;
    details: any;
    constructor(private route: ActivatedRoute, private moviesService: MoviesService) { }

    ngOnInit(): void {
        this.route.queryParamMap
            .subscribe((params) => {
                this.orderObj = { ...params.keys, ...params };
                this.moviesService.getVideos(this.orderObj.params?.id).subscribe((result: any) => {
                    this.videoURL = `https://www.youtube.com/embed/${result?.results[0]?.key}?autoplay=1&mute=1`
                })
                this.moviesService.getDetails(this.orderObj?.params?.id).subscribe((result: any) => {
                    this.details = result;
                })
            }, (error) => { console.error('An error occurred:', error) })
    }

}
