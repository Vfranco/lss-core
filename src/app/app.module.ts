import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LssTopbarModule, LssSidebarModule } from '@lss/lib-core';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LssTopbarModule,
    LssSidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
