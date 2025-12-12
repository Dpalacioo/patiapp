import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { MenuItem } from '../interfaces/menu-item.interface';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private auth: AuthService) {}

  private menu: MenuItem[] = [
    {
      label: 'Dashboard',
      icon: 'dashboard',
      path: '/',
      roles: ['admin', 'corte', 'taller', 'calidad', 'bodega', 'financiero'],
      exact: true,
    },
    {
      label: 'Cortes',
      icon: 'content_cut',
      path: '/cortes',
      roles: ['admin', 'corte'],
    },
    {
      label: 'Talleres',
      icon: 'store',
      path: '/talleres',
      roles: ['admin', 'taller'],
    },
    {
      label: 'Asignaciones',
      icon: 'assignment',
      path: '/assignments',
      roles: ['admin', 'taller'],
    },
    {
      label: 'Calidad',
      icon: 'check_circle',
      path: '/quality',
      roles: ['admin', 'calidad'],
    },
    {
      label: 'Inventario',
      icon: 'inventory',
      path: '/inventory',
      roles: ['admin', 'bodega'],
    },
    {
      label: 'Pagos',
      icon: 'payments',
      path: '/payments',
      roles: ['admin', 'financiero'],
    },
    {
      label: 'Reportes',
      icon: 'bar_chart',
      path: '/reports',
      roles: ['admin', 'financiero'],
    },
    {
      label: 'Remisiones',
      icon: 'local_shipping',
      path: '/remissions',
      roles: ['admin', 'bodega'],
    },
    {
      label: 'Recepciones',
      icon: 'move_to_inbox',
      path: '/receptions',
      roles: ['admin', 'calidad', 'bodega'],
    },
  ];

  getMenuForUser(): MenuItem[] {
    // si AuthService guarda user en localStorage, devolvemos filtreado
    const user = this.auth.getUser();
    const role = user?.role ?? '';
    return this.getMenuByRole(role);
  }

  getMenuByRole(role: string): MenuItem[] {
    console.log('Filtrando menú para role:', role); // 🔹
    const filtered = this.menu.filter((item) => item.roles.includes(role));
    console.log('Items filtrados:', filtered); // 🔹
    return filtered;
  }
}
