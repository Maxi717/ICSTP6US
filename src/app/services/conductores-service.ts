import { Injectable } from "@angular/core";
import { Conductores, Conductor } from "../models/conductor";
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConductorService {
  constructor() {}
  get() {
    return of(Conductores);
  }
  getPorId(id: number): Observable<Conductor | undefined> {
    return this.get().pipe(
        map(items => items.find(item => item.IdConductor === id)))
  }
}
