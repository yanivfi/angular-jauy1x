import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { EduAutocompleteComponent } from './autocomplete.component'

import { AutoCompleteModule } from 'primeng/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [ FormsModule, AutoCompleteModule, BrowserAnimationsModule ],
    exports: [ EduAutocompleteComponent ],
    declarations: [ EduAutocompleteComponent ],
    entryComponents: [ EduAutocompleteComponent ]
})
export class EduAutoCompleteModule { }
