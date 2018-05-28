import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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

//Servicios
import { ServicioLogin } from './services/servicio-login.service';


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
    appRouting,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ServicioLogin
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
