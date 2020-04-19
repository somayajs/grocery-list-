import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { GroceriesListComponent  } from './groceries/groceries-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GroceriesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
