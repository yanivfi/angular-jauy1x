import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
//import { HomeComponent } from './components/home/home.component';
import { EduAutocompleteComponent } from './components/autocomplete/autocomplete.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            //{path: '', component: HomeComponent},
           
            { path: 'edu-autocomplete', loadChildren: './components/autocomplete/autocomplete.module#EduAutoCompleteModule' },
           
            { path: 'edu-button', loadChildren: './components/button/button.module#EduButtonModule' },
        ],  { scrollPositionRestoration: 'enabled' })    
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}