import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { EduAutocompleteComponent } from './autocomplete.component';
import { EduAutoCompleteRoutingModule } from './autocomplete-routing.module';

import { AutoCompleteModule } from 'primeng/autocomplete';

@NgModule({
    imports: [ FormsModule, AutoCompleteModule, EduAutoCompleteRoutingModule ],
    declarations: [ EduAutocompleteComponent ]
    })
export class EduAutoCompleteModule { }
