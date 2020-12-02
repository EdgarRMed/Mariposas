import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { NuevoEjemplar } from '../../models/ejemplar';
import { ProjectService } from '../../services/projet.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
  providers: [ProjectService]
})
export class EditarComponent implements OnInit {

  // Aqui van las modificaciones 

  constructor() { }

  ngOnInit(): void {
  }


  // Aqui va eliminarEjemplar

}