import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderDisplayComponent } from './order-display/order-display.component';
import { OrderInfoComponent } from './order-display/order-info/order-info.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderDisplayComponent,
    OrderInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
