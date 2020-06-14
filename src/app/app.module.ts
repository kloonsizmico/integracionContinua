import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {QueEsIntegracionComponent} from './components/que-es-integracion/que-es-integracion.component';

@NgModule({
  declarations: [
    AppComponent,
    QueEsIntegracionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
