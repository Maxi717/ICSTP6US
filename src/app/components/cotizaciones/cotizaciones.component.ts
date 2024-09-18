import { Component, OnInit } from "@angular/core";
import { CotizacionService } from "../../services/cotizaciones-service";
import { Cotizacion } from "src/app/models/cotizacion";
import { Conductor } from "src/app/models/conductor";
import { ConductorService } from "src/app/services/conductores-service";
@Component({
  selector: "app-cotizaciones",
  templateUrl: "./cotizaciones.component.html",
  styleUrls: ["./cotizaciones.component.scss"]
})
export class CotizacionesComponent implements OnInit {
  Titulo = "Cotizaciones";
  Items: Cotizacion[] = [];
  Conductores: Conductor[] = [];
  cotizElegida: Cotizacion[] = [{IdCotizacion: 0,FechaEntrega: '',FechaRetiro: '',Costo: 0,Calificacion: 0}];
  tablaCotiz: string = 'visible';
  btnVolverCotiz: string = 'none';
  haySeleccionado: boolean = false;
  PagoTarjeta: boolean = false;
  PagoContadoR: boolean = false;
  PagoContadoCE: boolean = false;



  constructor(
    private cotizacionesService: CotizacionService,
    private conductoresService: ConductorService

  ) 
  {}

  ngOnInit() {
    this.GetCotizaciones();
  }

  GetCotizaciones() {
    this.cotizacionesService.get().subscribe((res: Cotizacion[]) => {
      this.Items = res;
    });
  }

  GetConductores() {
    this.conductoresService.get().subscribe((res:Conductor[]) => {this.Conductores = res})
  }

  selectCotiz(item: Cotizacion): void {
    this.cotizElegida = [item];
    this.btnVolverCotiz = '';
    this.tablaCotiz = 'none';
    this.haySeleccionado = true;
    this.Titulo = "Cotizacion Seleccionada";
    this.GetConductores();




  }

  limpiarCotiz() {
    this.cotizElegida = [{IdCotizacion: 0,FechaEntrega: '',FechaRetiro: '',Costo: 0,Calificacion: 0}];
    this.tablaCotiz = '';
    this.btnVolverCotiz = 'none';
    this.haySeleccionado = false;
    this.Titulo = "Cotizaciones";
    this.PagoTarjeta = false;
    this.PagoContadoCE = false;
    this.PagoContadoR = false;



  }

  selectTarjeta() {
    this.PagoTarjeta = true;
    this.PagoContadoCE = false;
    this.PagoContadoR = false;
  }

  selectPagoContadoR() {
    this.PagoTarjeta = false;
    this.PagoContadoCE = false;
    this.PagoContadoR = true;
  }

  selectPagoContadoCE() {
    this.PagoTarjeta = false;
    this.PagoContadoCE = true;
    this.PagoContadoR = false;
  }
}
