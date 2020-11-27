import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http: HttpClient) { }

  loadUsers() {
    return this.http
    .get('https://cors-anywhere.herokuapp.com/https://welcomcity.herokuapp.com/test/usuarios');    
  }

  loadExperiencias(){
    return this.http
  .get(`https://cors-anywhere.herokuapp.com/https://welcomcity.herokuapp.com/test/experiencias`)
  }

  loadServicios(){
    return this.http
  .get(`https://cors-anywhere.herokuapp.com/https://welcomcity.herokuapp.com/test/servicios`)
  }

  loadExperienciaById(id) {
  return this.http
  .get(`https://cors-anywhere.herokuapp.com/https://welcomcity.herokuapp.com/test/experiencias/${id}`);  
}

  //Imagenes random proporcionadas por una api-rest publica solo para pruebas
  loadImagenesRandom(){ 
    return this.http
  .get(`https://cors-anywhere.herokuapp.com/https://picsum.photos/v2/list?page=2&limit=10`)

}

}
