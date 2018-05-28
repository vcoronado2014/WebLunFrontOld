import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdministracionWebComponent } from './components/administracion-web/administracion-web.component';
import { AdministracionLunComponent } from './components/administracion-lun/administracion-lun.component';
import { ReportesComponent } from './components/reportes/reportes.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'administracion', component: AdministracionWebComponent },
    { path: 'editar', component: AdministracionLunComponent },
    { path: 'reportes', component: ReportesComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(routes);