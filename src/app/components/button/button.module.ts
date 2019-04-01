import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { EduButtonComponent } from './button.component'
import { EduButtonRoutingModule } from './button-routing.module';

import { ButtonModule } from 'primeng/button';

@NgModule({
    imports: [ FormsModule, ButtonModule, EduButtonRoutingModule ],
    exports: [ EduButtonComponent ],
    declarations: [ EduButtonComponent ],
    entryComponents: [ EduButtonComponent ]
})
export class EduButtonModule { }
