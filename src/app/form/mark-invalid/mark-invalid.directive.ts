import { Directive, ElementRef, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Directive({
    selector: '[markInvalid]'
})
export class MarkInvalidDirective {

    @Input() markInvalid?: FormControl<string | null>;

    constructor(private el: ElementRef) { }

    ngDoCheck() {
        if (this.markInvalid?.invalid && (this.markInvalid?.dirty || this.markInvalid?.touched)) {
            this.el.nativeElement.classList.add('is-invalid')
        }
    }

}
