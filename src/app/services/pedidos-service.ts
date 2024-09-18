import { Injectable } from "@angular/core";
import { PedidoCotizacion, Pedidos } from "../models/pedidoCotiz";
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  constructor() {}
  get() {
    return of(Pedidos);
  }
  getPorId(id: number): Observable<PedidoCotizacion | undefined> {
    return this.get().pipe(
        map(items => items.find(item => item.IdPedido === id)))
  }
}
