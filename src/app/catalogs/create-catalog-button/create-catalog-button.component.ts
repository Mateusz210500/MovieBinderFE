import { Component, EventEmitter, Output, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CatalogsService } from '../../_services/catalogs.service';
import { FileService } from '../../_services/file.service';

@Component({
    selector: 'app-create-catalog-button',
    templateUrl: './create-catalog-button.component.html'
})
export class CreateCatalogButtonComponent {
    closeResult = '';
    file: File | null = null;
    @Output() createdCatalogEvent = new EventEmitter();

    constructor(private modalService: NgbModal, private fileService: FileService, private catalogService: CatalogsService) { }

    CreateCatalogForm = new FormGroup({
        title: new FormControl("", [Validators.required]),
        description: new FormControl("", [Validators.required, Validators.maxLength(100)]),
        file: new FormControl()
    })

    uploadFile(event: any) {
        this.file = event.target.files[0];
    }

    onCreate() {
        let fileName = ''
        if (this.file) {
            this.fileService.uploadImage(this.file).subscribe((result: any) => {
                fileName = result.fileName
                this.CreateCatalogForm.patchValue({
                    file: fileName
                })
                this.createCatalog(true)
            }, (error) => { console.error('An error occurred:', error) })
        } else {
            this.createCatalog(false)
        }
    }

    private createCatalog(withFile?: boolean) {
        this.catalogService.createCatalog({
            title: this.CreateCatalogForm.controls.title.value,
            description: this.CreateCatalogForm.controls.description.value,
            file: withFile ? this.CreateCatalogForm.controls.file.value : undefined
        }).subscribe(() => { }, (error) => { console.error('An error occurred:', error) })
    }

    open(content: TemplateRef<any>) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
            (result: any) => {
                this.closeResult = `Closed with: ${result}`;
            },
            (reason: any) => {
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
