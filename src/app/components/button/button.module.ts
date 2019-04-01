import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { EduButtonComponent } from './button.component'
import { EduButtonRoutingModule } from './button-routing.module';

import { ButtonModule } from 'primeng/button';

const routes: Routes = [
  { path: '', component: EduButtonComponent }
];

@NgModule({
    imports: [ 
      FormsModule, 
      ButtonModule, 
      RouterModule.forChild(routes),
    ],
    exports: [ EduButtonComponent ],
    declarations: [ EduButtonComponent ],
    entryComponents: [ EduButtonComponent ]
})
export class EduButtonModule { }
