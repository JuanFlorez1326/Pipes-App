import { CommonModule } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';

import { AppComponent } from './app.component';
import { SalesModule } from './sales/sales.module';
import { SharedModule } from './shared/shared.module';


// Change the Locale of the App
import localeEs from '@angular/common/locales/es-CO';
import { registerLocaleData } from '@angular/common';

registerLocaleData( localeEs );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRouterModule,
    SharedModule,
    SalesModule
  ],
  providers: [
    { 
      provide: LOCALE_ID , 
      useValue: 'es-CO'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
