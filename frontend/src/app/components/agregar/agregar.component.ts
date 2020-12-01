import { Component, OnInit } from '@angular/core';
import { NuevoEjemplar } from '../../models/ejemplar';
import { ProjectService } from '../../services/projet.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
  providers: [ProjectService]
})
export class AgregarComponent implements OnInit {

  public title: string;
  public ejemplar: NuevoEjemplar;
  public status: boolean;

    constructor(private _projetService: ProjectService) { 
      this.title = "Agregar nuevo ejempalr";
      this.ejemplar = new NuevoEjemplar('','','','','','','');

    }

    ngOnInit(): void {
    }

    onSubmit(form) {
      console.log(this.ejemplar);
      this._projetService.agregarEjemplar(this.ejemplar).subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(<any>error);
        }
      );
    }

}
