import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../_services/profile.service';

export interface IUser {
    createdAt: string,
    email: string,
    id: string,
    nickname: string,
    updateAt: string,
}

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    userData?: IUser;

    constructor(private profileService: ProfileService) { }

    ngOnInit(): void {
        this.profileService.getUser().subscribe((result: any) => {
            this.userData = result.user
            console.log(this.userData)
        }, (error) => { console.error('An error occurred:', error) })
    }

}
