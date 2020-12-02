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

  constructor(private _projectService: projectService) {}

  ngOnInit(): void {
    this.getEjemplar();
  }
  getEjemplar(){
    this._projectService.getEjemplar().subscribe(
      response =>{
        console.log(response);
      },
      error =>{
        console.log(<any>error);
      }
    );
  }

  // Aqui va eliminarEjemplar
  eliminarEjemplar(id){
    this._projectService.eliminarEjemplar(id).subscribe(
      response =>{
        if(response.project){
          this._router.navigate(['/editar']);
        }
      },
      error =>{
        console.log(<any>error);
      }
    );
  }
}
