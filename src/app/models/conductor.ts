export interface Conductor {
    IdConductor: number;
    Nombre: string;
    Apellido: string;
    Tarjeta: string;
    ContadoRetirar: string;
    ContadoContraEntrega: string;
  }
  export const Conductores: Conductor[] = [
    {IdConductor: 1, Nombre: 'Felipe', Apellido: 'Rodríguez', Tarjeta: 'S', ContadoRetirar: 'S', ContadoContraEntrega: 'S' },
    {IdConductor: 2, Nombre: 'Santiago', Apellido: 'Pérez', Tarjeta: 'N', ContadoRetirar: 'S', ContadoContraEntrega: 'N' },
    {IdConductor: 3, Nombre: 'Juan', Apellido: 'Domínguez', Tarjeta: 'S', ContadoRetirar: 'N', ContadoContraEntrega: 'S' },
    {IdConductor: 4, Nombre: 'Pedro', Apellido: 'Sosa', Tarjeta: 'S', ContadoRetirar: 'S', ContadoContraEntrega: 'S' },
    {IdConductor: 5, Nombre: 'Pablo', Apellido: 'Botta', Tarjeta: 'S', ContadoRetirar: 'S', ContadoContraEntrega: 'N' },
    {IdConductor: 6, Nombre: 'Judas', Apellido: 'Iscariote', Tarjeta: 'S', ContadoRetirar: 'S', ContadoContraEntrega: 'N' },
    {IdConductor: 7, Nombre: 'Bartolomé', Apellido: 'Mitre', Tarjeta: 'N', ContadoRetirar: 'S', ContadoContraEntrega: 'S' }
  ];
  

