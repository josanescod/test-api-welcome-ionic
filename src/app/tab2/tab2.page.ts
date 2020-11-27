import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  experiencias: any[];
  idExperiencia: any[];

  //prueba imagenes random
  imagenes: any[];
  expimagen: string [];
  

  //variables seleccion
 item: string[];
 test: string[];
 


  constructor(private http: HttpService) {
    //console.log('cargando pagina')
    this.cargarListadoExperiencias()
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
        console.log(res['puntuacion']);
        console.log(res['fotos'])
        
        
      //this.item = res;
      this.item = [res['id'],res['nombre'],res['descripcion'],res['precio'],res['puntuacion'],res['fotos']]
      
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
        //console.log(res)
        this.expimagen = res;

        for (let e in this.expimagen) {
          //console.log(this.experiencias[e])
         
          console.log(this.expimagen[e])
          
         // this.expimagen[e].push(this.experiencias[e]);
        }

      },(error)=>{
        console.error(error);
      }
    );

    this.http.loadImagenesRandom().subscribe(
      (res: any)=>{
        //console.log(res)
        this.imagenes = res;
        for(let e in this.imagenes){
          console.log(this.imagenes[e]['download_url'])
          //console.log(this.expimagen[e]['nombre'])
          this.expimagen[e]['download_url'] = this.imagenes[e]['download_url']
          console.log(this.expimagen[e])
        }

      },(error)=>{
        console.error(error);
      }
    );

    

    for (let e in this.imagenes) {
      //this.expimagen[e].download_url = this.imagenes[e]['download_url'];
    }
    //console.log('nuevo array con imagenes: ',this.expimagen)

  }

  mostrarImagenesRandom(){
    this.http.loadImagenesRandom().subscribe(
      (res: any)=>{
        console.log(res)
        this.imagenes = res;

      },(error)=>{
        console.error(error);
      }
    );

  }

 /* borrarImagenesRandom(){
    console.log('borrando imagenes');
    let listado = this.imagenes;
    listado.length = 0;
    }*/

}
