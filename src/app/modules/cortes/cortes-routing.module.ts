import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsCortesComponent } from './pages/tabs-cortes/tabs-cortes.component';
import { RoleGuard } from 'src/app/shared/guards/role.guard';
import { DetailComponent } from './pages/detail/detail.component';

const routes: Routes = [
  {
    path: '',
    component: TabsCortesComponent,
    canActivate: [RoleGuard],
    data: { roles: ['admin', 'corte'] },
  },
  {
    path: 'detail/:id', // Ruta para el detalle
    component: DetailComponent,
    canActivate: [RoleGuard],
    data: { roles: ['admin', 'corte'] },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CortesRoutingModule {}
