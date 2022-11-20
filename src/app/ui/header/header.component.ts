import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    @Input() headerType?: 'hideOnScroll' | 'sticky' | 'default' = 'default'

    @ViewChild('header') header?: ElementRef;
    private scrollChangeCallback?: () => void;
    currentPosition: any;
    showHeader: boolean = true;
    headerHeight: number = 10;

    ngAfterViewInit() {
        this.headerHeight = this.header?.nativeElement.offsetHeight;
        document.documentElement.style.setProperty('--header-height', `${this.headerHeight}px`)

        this.scrollChangeCallback = () => this.onContentScrolled(event);
        window.addEventListener('scroll', this.scrollChangeCallback, true);
    }

    onContentScrolled(e: any) {
        let scroll = window.pageYOffset;
        if (scroll > this.currentPosition) {
            this.showHeader = false;
        } else {
            this.showHeader = true;
        }
        this.currentPosition = scroll;
    }
}
