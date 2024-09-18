import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CotizacionesComponent } from './components/cotizaciones/cotizaciones.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CotizacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
