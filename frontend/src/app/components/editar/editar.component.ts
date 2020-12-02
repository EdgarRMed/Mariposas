import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { NuevoEjemplar } from '../../models/ejemplar';
import { ProjectService } from '../../services/projet.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
  providers: [ProjectService]
})
export class EditarComponent implements OnInit {

  public url: string;
  public ejemplar: NuevoEjemplar;
  public ejemplares: NuevoEjemplar[];
  public confirm: boolean;
  public name: string;

  // Aqui van las modificaciones 

  constructor(
    private _projectService: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute

  ) {
    this.url = Global.url;
    this.confirm = false;
  }

  ngOnInit(): void {
    this.getEjemplar();
  }
  getEjemplar(){
    this._projectService.getEjemplar().subscribe(
      response =>{
        if(response.ejemplares){
          this.ejemplares = response.ejemplares;
        }
      },
      error =>{
        console.log(<any>error);
      }
    );
  }

  setConfirm(confirm, name){
    this.confirm = confirm;
    this.name = name;
  }


  // Aqui va eliminarEjemplar
  eliminarEjemplar(id){
    this._projectService.eliminarEjemplar(id).subscribe(
      response =>{
        if(response){
          this._router.navigate(['/editar']);
        }
      },
      error =>{
        console.log(<any>error);
      }
    );
  }
}
