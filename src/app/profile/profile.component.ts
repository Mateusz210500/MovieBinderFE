import { Component, OnInit, TemplateRef } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
    closeResult = '';

    constructor(private profileService: ProfileService, private modalService: NgbModal) { }

    ngOnInit(): void {
        this.profileService.getUser().subscribe((result: any) => {
            this.userData = result.user
            console.log(this.userData)
        }, (error) => { console.error('An error occurred:', error) })
    }


    open(content: TemplateRef<any>) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
            (result) => {
                this.closeResult = `Closed with: ${result}`;
            },
            (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            },
        );
    }

    private getDismissReason(reason: ModalDismissReasons): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

}
