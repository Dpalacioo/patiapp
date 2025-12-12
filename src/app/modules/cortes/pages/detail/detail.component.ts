import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CortesService } from '../../services/cortes.service';
import { Corte } from 'src/app/shared/interfaces/menu-item.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  corte?: Corte; // ahora opcional

  constructor(
    private route: ActivatedRoute,
    private cortesService: CortesService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.params['id']);
    this.cortesService.getCortesById(id).subscribe({
      next: (corte) => (this.corte = corte),
      error: (err) => {
        console.error('Error al cargar el corte', err);
      },
    });
  }
}
