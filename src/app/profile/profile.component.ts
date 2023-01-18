import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from '../_services/alert.service';
import { Catalog, CatalogsService } from '../_services/catalogs.service';
import { FileService } from '../_services/file.service';
import { ProfileService } from '../_services/profile.service';

export interface IUser {
    createdAt: string,
    email: string,
    id: string,
    about: string;
    nickname: string,
    backgroundColor: string,
    file?: string;
    catalogs?: any[];
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
    myCatalogs: Catalog[] = []

    constructor(private profileService: ProfileService, private modalService: NgbModal, private fileService: FileService, private alertService: AlertService, private catalogsService: CatalogsService) { }

    ngOnInit(): void {
        this.updateUserInfo();
    }

    updateUserInfo() {
        this.profileService.getUser().subscribe((result: any) => {
            this.userData = result.user
            this.ProfileForm.patchValue({
                nickname: this.userData?.nickname,
                about: this.userData?.about,
                backgroundColor: this.userData?.backgroundColor,
            })
        }, (error) => { console.error('An error occurred:', error) })
        this.catalogsService.getMyCatalogs().subscribe((result: any) => {
            this.myCatalogs = result.myCatalogs;
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
    }

    onUpdateProfile() {
        let fileName = ''
        if (this.file) {
            this.fileService.uploadImage(this.file).subscribe((result: any) => {
                fileName = result.fileName
                this.ProfileForm.patchValue({
                    file: fileName
                })
                this.updateProfile(true)
            }, (error) => { console.error('An error occurred:', error) })
        } else {
            this.updateProfile(false)
        }
    }

    private updateProfile(withFile?: boolean) {
        this.profileService.updateProfile({
            nickname: this.ProfileForm.controls.nickname.value,
            about: this.ProfileForm.controls.about.value,
            backgroundColor: this.ProfileForm.controls.backgroundColor.value,
            file: withFile ? this.ProfileForm.controls.file.value : undefined
        }).subscribe(() => {
            this.updateUserInfo();
            this.modalService.dismissAll('submit')
        }, (error) => {
            console.error('An error occurred:', error);
            this.alertService.addAlert(error.error.message, 'danger');
        })
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

    get profileImage() {
        return this.userData?.file ? `http://localhost:3000/file/${this.userData?.file}` : 'https://aquaterraenergy.com/wp-content/uploads/2021/04/profile-placeholder.png'
    }
}

