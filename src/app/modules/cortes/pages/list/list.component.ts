// src/app/modules/cortes/pages/list/list.component.ts
import { Component, OnInit } from '@angular/core';
import { CortesService } from '../../services/cortes.service';
import { Corte } from 'src/app/shared/interfaces/menu-item.interface';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  cortes: Corte[] = [];
  displayedColumns: string[] = [
    'id',
    'mesa',
    'fecha',
    'referencia',
    'total',
    'detalle',
  ];

  constructor(
    private cortesService: CortesService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadCortes();
  }

  loadCortes() {
    this.cortesService.getCortes().subscribe({
      next: (res) => (this.cortes = res),
      error: (err) => console.error('Error cargando cortes:', err),
    });
  }
}
