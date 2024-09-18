import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { Cotizaciones } from "../models/cotizacion";

@Injectable({
  providedIn: 'root'
})
export class CotizacionService {
  constructor() {}
  get() {
    return of(Cotizaciones);
  }
}
