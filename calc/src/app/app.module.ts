import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MediaBimestralComponent } from './media-bimestral/media-bimestral.component';
import { MediaSubmitComponent } from './media-submit/media-submit.component';


@NgModule({
  declarations: [
    AppComponent,
    MediaBimestralComponent,
    MediaSubmitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
