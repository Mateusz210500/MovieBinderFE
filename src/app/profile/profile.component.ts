import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FileService } from '../_services/file.service';
import { ProfileService } from '../_services/profile.service';

export interface IUser {
    createdAt: string,
    email: string,
    id: string,
    nickname: string,
    backgroundColor: string,
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
    file: File | null = null;

    constructor(private profileService: ProfileService, private modalService: NgbModal, private fileService: FileService) { }

    ngOnInit(): void {
        this.profileService.getUser().subscribe((result: any) => {
            this.userData = result.user
            this.ProfileForm.patchValue({
                nickname: this.userData?.nickname
            })
        }, (error) => { console.error('An error occurred:', error) })
    }

    ProfileForm = new FormGroup({
        nickname: new FormControl("", [Validators.required]),
        about: new FormControl("", [Validators.maxLength(100)]),
        backgroundColor: new FormControl(),
        file: new FormControl()
    })

    uploadFile(event: any) {
        this.file = event.target.files[0];
        console.log(this.file)
    }

    updateProfile() {
        let fileName = ''
        if (this.file) {
            this.fileService.uploadImage(this.file).subscribe((result: any) => {
                fileName = result.fileName

                this.ProfileForm.patchValue({
                    file: fileName
                })

                this.profileService.updateProfile({
                    nickname: this.ProfileForm.controls.nickname.value,
                    about: this.ProfileForm.controls.about.value,
                    backgroundColor: this.ProfileForm.controls.backgroundColor.value,
                    file: this.ProfileForm.controls.file.value
                }).subscribe((result: any) => {
                    console.log(result)
                }, (error) => { console.error('An error occurred:', error) })

            }, (error) => { console.error('An error occurred:', error) })
        } else {
            this.profileService.updateProfile({
                nickname: this.ProfileForm.controls.nickname.value,
                about: this.ProfileForm.controls.about.value,
                backgroundColor: this.ProfileForm.controls.backgroundColor.value,
                file: this.ProfileForm.controls.file.value
            }).subscribe((result: any) => {
                console.log(result)
            }, (error) => { console.error('An error occurred:', error) })
        }
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

