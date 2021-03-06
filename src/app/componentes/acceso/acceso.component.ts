import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.css']
})
export class AccesoComponent implements OnInit {
  usuario:string;
  clave:string;
  msgs=[]

  constructor(private usu:UsuariosService,private rout:Router) { }

  ngOnInit() {
  }
  Login(){
  this.usu.login(this.usuario,this.clave).subscribe((datos)=>{
      if(datos.respuesta.logueado =="TRUE"){
        localStorage.setItem('datos',JSON.stringify(datos.respuesta));

          this.rout.navigate(['admin/panel']);
      }
      else{
      
        this.usuario='';
        this.clave='';
        localStorage.setItem('datos','');
        this.msgs=[];

        this.msgs.push({severity:'error', summary:'USUARIO INCORRECTO',closable:'false', detail:''});
      }
    
  });
  }

}
