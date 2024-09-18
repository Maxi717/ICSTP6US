export interface Cotizacion {
    IdCotizacion: number;
    FechaRetiro: string;
    FechaEntrega: string;
    Costo: number;
    Calificacion: number;
  }
  export const Cotizaciones: Cotizacion[] = [
    {IdCotizacion: 1, FechaRetiro: '01/10/2024', FechaEntrega: '02/10/2024', Costo: 2500 , Calificacion: 5},
    {IdCotizacion: 2, FechaRetiro: '11/10/2024', FechaEntrega: '12/10/2024', Costo: 2550 , Calificacion: 3},
    {IdCotizacion: 3, FechaRetiro: '28/09/2024', FechaEntrega: '29/09/2024', Costo: 3000 , Calificacion: 4},
    {IdCotizacion: 4, FechaRetiro: '19/09/2024', FechaEntrega: '22/09/2024', Costo: 1500 , Calificacion: 2},
    {IdCotizacion: 5, FechaRetiro: '21/10/2024', FechaEntrega: '30/10/2024', Costo: 2000 , Calificacion: 3},
    {IdCotizacion: 6, FechaRetiro: '19/10/2024', FechaEntrega: '20/10/2024', Costo: 9000 , Calificacion: 5},
    {IdCotizacion: 7, FechaRetiro: '02/10/2024', FechaEntrega: '03/10/2024', Costo: 3500 , Calificacion: 4}
  ];
  

