import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { EduButtonComponent } from './button.component'

import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [ FormsModule, ButtonModule, BrowserAnimationsModule ],
    exports: [ EduButtonComponent ],
    declarations: [ EduButtonComponent ],
    entryComponents: [ EduButtonComponent ]
})
export class EduButtonModule { }
