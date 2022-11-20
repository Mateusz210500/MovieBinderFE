import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-svg-icon',
    template: `<div [ngStyle]="style" [innerHTML]="svgIcon" (mouseover)="hover=true" (mouseleave)="hover=false"></div>`,
})
export class SvgIconComponent implements OnChanges {

    @Input()
    public name?: string;
    @Input()
    public color?: string = 'white';
    @Input()
    public hoverColor?: string = 'lightgray';
    @Input()
    public size?: string = '1.8rem';

    public svgIcon: any;
    protected hover: boolean = false;

    constructor(
        private httpClient: HttpClient,
        private sanitizer: DomSanitizer,
    ) {
    }

    get style() {
        return { 'fill': this.hover ? this.hoverColor : this.color, 'width': this.size }
    }

    public ngOnChanges(): void {
        if (!this.name) {
            this.svgIcon = '';
            return;
        }
        this.httpClient
            .get(`assets/images/svg/${this.name}.svg`, { responseType: 'text' })
            .subscribe(value => {
                this.svgIcon = this.sanitizer.bypassSecurityTrustHtml(value);
            });
    }

}