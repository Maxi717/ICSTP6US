export interface PedidoCotizacion {
    IdPedido: number;
    NombreDador: string;
    ApellidoDador: string;
    Direccion: string;
  }
  export const Pedidos: PedidoCotizacion[] = [
    {IdPedido: 1, NombreDador: 'Manuel', ApellidoDador: 'Díaz', Direccion: 'Felix Paz 1123'},
    {IdPedido: 2, NombreDador: 'Martín', ApellidoDador: 'Tapia', Direccion: 'Santa Ana 3324' },
    {IdPedido: 3, NombreDador: 'Rodrigo', ApellidoDador: 'Fassi',Direccion: 'Juan B. Justo 002'},
    {IdPedido: 4, NombreDador: 'Samuel', ApellidoDador: 'Rossi',Direccion: 'Valparaíso 9000'},
    {IdPedido: 5, NombreDador: 'Emiliano', ApellidoDador: 'Benedetto', Direccion: 'Mons. Pablo Cabrera 33' },
    {IdPedido: 6, NombreDador: 'Ricardo', ApellidoDador: 'Rojo', Direccion: 'Castro Barros 58'},
    {IdPedido: 7, NombreDador: 'Roberto', ApellidoDador: 'Cavani', Direccion: 'Fray Luis Beltrán 746'}
  ];
  

