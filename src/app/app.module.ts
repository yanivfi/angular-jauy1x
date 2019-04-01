import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EduAutoCompleteModule } from './components/autocomplete/autocomplete.module';
import { EduButtonModule} from './components/button/button.module';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, EduAutoCompleteModule, EduButtonModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
