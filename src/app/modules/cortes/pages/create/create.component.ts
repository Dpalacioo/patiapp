import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { CortesService } from '../../services/cortes.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cortesService: CortesService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      mesa: ['', Validators.required],
      fecha: ['', Validators.required],
      referencia: ['', Validators.required],
      material: ['', Validators.required],
      total: [0, [Validators.required, Validators.min(0)]],
      detalles: this.fb.array([]),
    });
  }

  get detalles(): FormArray {
    return this.form.get('detalles') as FormArray;
  }

  addDetalle() {
    const detalle = this.fb.group({
      color: ['', Validators.required],
      talla: ['', Validators.required],
      cantidad: [0, [Validators.required, Validators.min(1)]],
    });
    this.detalles.push(detalle);
  }

  removeDetalle(index: number) {
    this.detalles.removeAt(index);
  }

  submit() {
    if (this.form.invalid) {
      this.snackBar.open('Por favor completa todos los campos', 'Cerrar', {
        duration: 3000,
      });
      return;
    }

    this.cortesService.createCorte(this.form.value).subscribe({
      next: () => {
        this.snackBar.open('Corte creado correctamente', 'Cerrar', {
          duration: 3000,
        });
        this.form.reset();
        this.detalles.clear();
      },
      error: (err) => {
        console.error('Error al crear corte', err);
        this.snackBar.open('Error al crear corte', 'Cerrar', {
          duration: 3000,
        });
      },
    });
  }
}
