import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CortesRoutingModule } from './cortes-routing.module';
import { ListComponent } from './pages/list/list.component';
import { CreateComponent } from './pages/create/create.component';
import { DetailComponent } from './pages/detail/detail.component';


@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    CortesRoutingModule
  ]
})
export class CortesModule { }
