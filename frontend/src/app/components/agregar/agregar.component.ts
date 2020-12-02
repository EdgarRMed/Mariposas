import { Component, OnInit } from '@angular/core';
import { NuevoEjemplar } from '../../models/ejemplar';
import { ProjectService } from '../../services/projet.service';
import {UploadService} from '../../services/upload.services'; 
import {Global } from '../../services/global';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
  providers: [ProjectService, UploadService]
})
export class AgregarComponent implements OnInit {

  public title: string;
  public ejemplar: NuevoEjemplar;
  public status: string;
  public filesToUpload: Array<File>;
    constructor(private _projetService: ProjectService, private _uploadService: UploadService) { 
      
      this.title = " ~ Agregar nuevo ejemplar ~";
      this.ejemplar = new NuevoEjemplar('','','','','','','','');

  
    }

    ngOnInit(): void {
    }

    onSubmit(form) {
      // Guardar los datos
      
      this._projetService.agregarEjemplar(this.ejemplar).subscribe(
        response => {  
          if(response.nuevoEjemplar) {
            //Subir la imagen
            this._uploadService.makeFileRequest(Global.url+"uploadImage/"+response.nuevoEjemplar._id , [], this.filesToUpload, "imagen")
            .then((result: any)=>{
              this.status = "success";
              form.reset();
            });
          } else{
            this.status = 'failed';
          }
            
        },
        error => {
          console.log(<any>error);
        }
      );
    }

    fileChangeEvent(fileInput: any){
      this.filesToUpload = <Array <File>>fileInput.target.files; 
    }

}
