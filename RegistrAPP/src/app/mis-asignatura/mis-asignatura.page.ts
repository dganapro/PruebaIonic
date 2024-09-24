import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Asignatura {
  id: number;
  nombre: string;
  siglas: string;
}

@Component({
  selector: 'app-mis-asignatura',
  templateUrl: './mis-asignatura.page.html',
  styleUrls: ['./mis-asignatura.page.scss'],
})
export class MisAsignaturaPage implements OnInit {
  asignaturas: Asignatura[] = [
    { id: 1, nombre: 'Matemáticas', siglas: 'mdi112' },
    { id: 2, nombre: 'Ciencias', siglas: 'sci233' },
    // Agrega más asignaturas según sea necesario
  ];

  constructor(private router: Router) { }

  ngOnInit() { }

  verAsignatura(id: number) {
    this.router.navigate(['/asignatura', id]);
  }
}