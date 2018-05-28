import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import { appRouting } from './app.routes';

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AdministracionWebComponent } from './components/administracion-web/administracion-web.component';
import { AdministracionLunComponent } from './components/administracion-lun/administracion-lun.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { LoginComponent } from './components/login/login.component';
import { MantenedorEntidadComponent } from './components/mantenedor-entidad/mantenedor-entidad.component';
import { EditarUsuariosComponent } from './components/editar-usuarios/editar-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AdministracionWebComponent,
    AdministracionLunComponent,
    ReportesComponent,
    LoginComponent,
    MantenedorEntidadComponent,
    EditarUsuariosComponent
  ],
  imports: [
    BrowserModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
