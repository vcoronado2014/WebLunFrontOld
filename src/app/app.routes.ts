import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdministracionWebComponent } from './components/administracion-web/administracion-web.component';
import { AdministracionLunComponent } from './components/administracion-lun/administracion-lun.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { MantenedorEntidadComponent } from './components/mantenedor-entidad/mantenedor-entidad.component';
import { EditarUsuariosComponent } from './components/editar-usuarios/editar-usuarios.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'administracion', component: AdministracionWebComponent },
    { path: 'mantenedor', component: MantenedorEntidadComponent },
    { path: 'dashboard', component: EditarUsuariosComponent },
    { path: 'editar', component: AdministracionLunComponent },
    { path: 'reportes', component: ReportesComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(routes);