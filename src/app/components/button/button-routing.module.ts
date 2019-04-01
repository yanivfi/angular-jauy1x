import {NgModule}     from '@angular/core';
import {RouterModule} from '@angular/router'
import { EduButtonComponent } from './button.component'

@NgModule({
	imports: [
		RouterModule.forChild([
			{ path:'', component: EduButtonComponent }
		])
	],
	exports: [
		RouterModule
	]
})
export class EduButtonRoutingModule {}
