import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplaeDrivenComponent } from './templae-driven/templae-driven.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { ReactiveApproachComponent } from './reactive-approach/reactive-approach.component';
import { FormsFourthClassReactiveApproachComponent } from './forms-fourth-class-reactive-approach/forms-fourth-class-reactive-approach.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplaeDrivenComponent,
    ReactiveApproachComponent,
    FormsFourthClassReactiveApproachComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
