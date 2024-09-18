import { Component, OnInit } from "@angular/core";
import { CotizacionService } from "../../services/cotizaciones-service";
import { Cotizacion } from "src/app/models/cotizacion";
import { Conductor } from "src/app/models/conductor";
import { ConductorService } from "src/app/services/conductores-service";
import { PedidoCotizacion, Pedidos } from "src/app/models/pedidoCotiz";
import { PedidosService } from "src/app/services/pedidos-service";


@Component({
  selector: "app-cotizaciones",
  templateUrl: "./cotizaciones.component.html",
  styleUrls: ["./cotizaciones.component.scss"]
})
export class CotizacionesComponent implements OnInit {
  Titulo = "Cotizaciones";
  Items: Cotizacion[] = [];
  Conductores: Conductor[] = [];
  Pedidos: PedidoCotizacion[] = [];
  cotizElegida: Cotizacion[] = [{IdCotizacion: 0,FechaEntrega: '',FechaRetiro: '',Costo: 0,Calificacion: 0}];
  tablaCotiz: string = 'visible';
  btnVolverCotiz: string = 'none';
  haySeleccionado: boolean = false;
  PagoTarjeta: boolean = false;
  PagoContadoR: boolean = false;
  PagoContadoCE: boolean = false;
  cartelExito: boolean = false;
  cartelFracaso: boolean = false;
  stringPrint: string = '';



  constructor(
    private cotizacionesService: CotizacionService,
    private conductoresService: ConductorService,
    private pedidosService: PedidosService


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

  GetPedidos() {
    this.pedidosService.get().subscribe((res:PedidoCotizacion[]) => {this.Pedidos = res})
  }

  selectCotiz(item: Cotizacion): void {
    this.cotizElegida = [item];
    this.btnVolverCotiz = '';
    this.tablaCotiz = 'none';
    this.haySeleccionado = true;
    this.Titulo = "Cotizacion Seleccionada";
    this.GetConductores();
    this.GetPedidos();




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
    this.cartelExito = false;
    this.cartelFracaso = false;



  }

  selectTarjeta() {
    this.generarMensaje();
    this.PagoTarjeta = true;
    this.PagoContadoCE = false;
    this.PagoContadoR = false;
  }

  selectPagoContadoR() {
    this.generarMensaje();
    this.PagoTarjeta = false;
    this.PagoContadoCE = false;
    this.PagoContadoR = true;
  }

  selectPagoContadoCE() {
    this.generarMensaje();
    this.PagoTarjeta = false;
    this.PagoContadoCE = true;
    this.PagoContadoR = false;
  }

  generarMensaje() {
    let nombreTransp: HTMLTableCellElement = document.getElementById('nombreTransp') as HTMLTableCellElement;
    let apellidoTransp: HTMLTableCellElement = document.getElementById('apellidoTransp') as HTMLTableCellElement;
    let nombreDador: HTMLTableCellElement = document.getElementById('nombreDador') as HTMLTableCellElement;
    let apellidoDador: HTMLTableCellElement = document.getElementById('apellidoDador') as HTMLTableCellElement;
    let idCotiz: HTMLTableCellElement = document.getElementById('idCotiz') as HTMLTableCellElement;
    let monto: HTMLTableCellElement = document.getElementById('monto') as HTMLTableCellElement;
    let fechaRetiro: HTMLTableCellElement = document.getElementById('fechaRetiro') as HTMLTableCellElement;
    let direccion: HTMLTableCellElement = document.getElementById('direccion') as HTMLTableCellElement;
    this.stringPrint = 'Hola ' + nombreTransp.innerText + ' ' + apellidoTransp.innerText + '. ' + 'El dador de carga '+ nombreDador.innerText + ' ' + apellidoDador.innerText + ' '+ 'aceptó tu cotización N°'+ idCotiz.innerText+ ' por el monto de ' + monto.innerText + '. Deberás retirarlo el día ' + fechaRetiro.innerText + ' en '+ direccion.innerText;
  }

  confirmarPago() {
    this.cartelExito = true;
    this.cartelFracaso = false;
    this.PagoContadoCE = false;
    this.PagoContadoR = false;
    this.PagoTarjeta = false;
    this.tablaCotiz = 'none';
    this.btnVolverCotiz = 'none';
    this.haySeleccionado = false;
    console.log(this.stringPrint);
    alert(this.stringPrint);
  }


}
