import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { RoleGuard } from 'src/app/shared/guards/role.guard';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [RoleGuard],
    data: {
      roles: ['admin', 'corte', 'taller', 'calidad', 'bodega', 'financiero'],
    },
    children: [
      // DASHBOARD – Todos los roles
      {
        path: '',
        loadChildren: () =>
          import('../dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
        data: {
          roles: [
            'admin',
            'corte',
            'taller',
            'calidad',
            'bodega',
            'financiero',
          ],
        },
        canActivate: [RoleGuard],
      },

      // CORTES – admin + corte
      {
        path: 'cortes',
        loadChildren: () =>
          import('../cortes/cortes.module').then((m) => m.CortesModule),
        data: { roles: ['admin', 'corte'] },
        canActivate: [RoleGuard],
      },

      // TALLERES – admin + taller
      {
        path: 'talleres',
        loadChildren: () =>
          import('../talleres/talleres.module').then((m) => m.TalleresModule),
        data: { roles: ['admin', 'taller'] },
        canActivate: [RoleGuard],
      },

      // ASSIGNMENTS – admin + corte
      {
        path: 'assignments',
        loadChildren: () =>
          import('../assignments/assignments.module').then(
            (m) => m.AssignmentsModule
          ),
        data: { roles: ['admin', 'corte'] },
        canActivate: [RoleGuard],
      },

      // REPORTS – admin + financiero + corte + calidad
      {
        path: 'reports',
        loadChildren: () =>
          import('../reports/reports.module').then((m) => m.ReportsModule),
        data: { roles: ['admin', 'financiero', 'corte', 'calidad'] },
        canActivate: [RoleGuard],
      },

      // REMISSIONS – admin + corte + taller
      {
        path: 'remissions',
        loadChildren: () =>
          import('../remissions/remissions.module').then(
            (m) => m.RemissionsModule
          ),
        data: { roles: ['admin', 'corte', 'taller'] },
        canActivate: [RoleGuard],
      },

      // RECEPTIONS – admin + calidad + taller
      {
        path: 'receptions',
        loadChildren: () =>
          import('../receptions/receptions.module').then(
            (m) => m.ReceptionsModule
          ),
        data: { roles: ['admin', 'calidad', 'taller'] },
        canActivate: [RoleGuard],
      },

      // QUALITY – admin + calidad
      {
        path: 'quality',
        loadChildren: () =>
          import('../quality/quality.module').then((m) => m.QualityModule),
        data: { roles: ['admin', 'calidad'] },
        canActivate: [RoleGuard],
      },

      // INVENTORY – admin + bodega
      {
        path: 'inventory',
        loadChildren: () =>
          import('../inventory/inventory.module').then(
            (m) => m.InventoryModule
          ),
        data: { roles: ['admin', 'bodega'] },
        canActivate: [RoleGuard],
      },

      // PAYMENTS – admin + financiero
      {
        path: 'payments',
        loadChildren: () =>
          import('../payments/payments.module').then((m) => m.PaymentsModule),
        data: { roles: ['admin', 'financiero'] },
        canActivate: [RoleGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
