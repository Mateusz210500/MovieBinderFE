import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-errors-handler',
    templateUrl: './errors-handler.component.html',
    styleUrls: ['./errors-handler.scss']
})
export class ErrorsHandlerComponent {
    @Input() value?: FormControl<string | null>;
}
