import {NgModule}     from '@angular/core';
import {RouterModule} from '@angular/router'
import { EduAutocompleteComponent } from './autocomplete.component'

@NgModule({
	imports: [
		RouterModule.forChild([
			{ path:'', component: EduAutocompleteComponent }
		])
	],
	exports: [
		RouterModule
	]
})
export class EduAutoCompleteRoutingModule {}
