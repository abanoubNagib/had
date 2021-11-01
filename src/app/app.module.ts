import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularAbanoubComponent } from './angular-abanoub/angular-abanoub.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularAbanoubComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
