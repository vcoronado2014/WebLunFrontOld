import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicioLogin } from '../../services/servicio-login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUsuario:string;
  loginContrasena:string;

  constructor( private login: ServicioLogin) { }

  ngOnInit() {
  }

}
