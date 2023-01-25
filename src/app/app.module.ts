import { PrizmUiRootModule } from "@prizm-ui/components";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PrizmButtonModule } from '@prizm-ui/components';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule,
      PrizmUiRootModule,
      PrizmButtonModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
