export interface MenuItem {
  label: string;
  icon: string;
  path: string;
  roles: string[];
  exact?: boolean;
}

export interface Corte {
  id: number;
  mesa: string;
  fecha: string;
  referencia: string;
  material: string;
  total: number;
  detalles: {
    id: number;
    corteId: number;
    color: string;
    talla: string;
    cantidad: number;
  }[];
}
