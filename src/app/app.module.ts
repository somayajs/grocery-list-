import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GroceriesListComponent  } from './groceries/groceries-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GroceriesListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
