import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { NuevoEjemplar } from '../models/ejemplar';
import { Global } from './global';

@Injectable()
    export class ProjectService{
        public url: string;

        constructor(private _http: HttpClient){
            this.url = Global.url;
        }

        testService(){
            return "Funciona";
        }

        agregarEjemplar(ejemplar: NuevoEjemplar): Observable<any>{
            let params = JSON.stringify(ejemplar);
            let headers = new HttpHeaders().set('Content-Type', 'application/json');

            return this._http.post(this.url+'agregarEjemplar', params, {headers: headers});
        }

        // Aqui va getEjemplar ...

        // Aqui va eliminarEjemplar...

    }
