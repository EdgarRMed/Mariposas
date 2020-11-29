// Importar modulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

//  Importando el componente para editar
import { EditarComponent } from './components/editar/editar.component';

// Areglo de rutas para la pagina web
const appRoutes: Routes = [
// ruta por default al iniciar el servidor
 {path: '', component: EditarComponent},
// Al entrar a la seccion /editar
 {path: 'editar', component: EditarComponent},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);