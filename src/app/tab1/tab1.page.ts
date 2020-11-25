import { Component } from '@angular/core';
//importacion del servicio http
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  usuarios: any[];
  experiencias: any[];
  experiencia: any[];
  idExperiencia: any[];

  //variables seleccion
 item: string[];
 test: string[];
 


  constructor(private http: HttpService) {
    //console.log('cargando pagina')
    this.cargarListadoExperiencias()
  }
 

  mostrarUsuarios(){
    console.log('pulsado el boton de mostrar usuarios')
    this.http.loadUsers().subscribe(
      (res: any)=>{
        console.log(res)
       
        this.usuarios = res;





      },(error)=>{
        console.error(error);
      }
    );


  }
  borrarListadoUsuarios(){
    console.log('borrando listado de usuarios');
    let listado = this.usuarios;
    listado.length = 0;
    }

    
    borrarListadoExp(){
      console.log('borrando listado de usuarios');
      let listado = this.item;
      listado.length = 0;
    }
  
  mostrarExperienciaById(){

    
    //console.log(this.idExperiencia)
    //console.log(id)
    this.http.loadExperienciaById(this.idExperiencia).subscribe(
      (res: any)=>{
        console.log(res)
        console.log(res['id']);
        console.log(res['nombre']);
        console.log(res['descripcion']);
        console.log(res['precio']);
        console.log(res['puntuacion'])
        
        
      //this.item = res;
      this.item = [res['id'],res['nombre'],res['descripcion'],res['precio'],res['puntuacion']]
      
      console.log(this.item)
      console.log(typeof(this.item)); 
      
      console.log(this.item);

      },(error)=>{
        console.error(error);
      }
    );


  }

  cargarListadoExperiencias(){
    
    this.http.loadExperiencias().subscribe(
      (res: any)=>{
        console.log(res)
        this.experiencias = res;

      },(error)=>{
        console.error(error);
      }
    );


  }

  
  

}

