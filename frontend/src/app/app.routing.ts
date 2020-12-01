// Importar modulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { from } from 'rxjs';

//  Importando el componente para editar
import { EditarComponent } from './components/editar/editar.component';
import { AgregarComponent} from './components/agregar/agregar.component';
// Areglo de rutas para la pagina web
const appRoutes: Routes = [
// ruta por default al iniciar el servidor
 {path: '', component: EditarComponent},
// Al entrar a la seccion /editar
 {path: 'editar', component: EditarComponent},
 // Al dar click en el boton de agregar
 {path: 'agregar', component: AgregarComponent},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);