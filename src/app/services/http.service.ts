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

  loadComentarios() {
    return this.http
      .get(`https://cors-anywhere.herokuapp.com/https://welcomcity.herokuapp.com/test/comentarios`)
  }

  loadEmails() {
    return this.http
      .get(`https://cors-anywhere.herokuapp.com/https://welcomcity.herokuapp.com/test/emails`)
  }

  loadExperiencias() {
    return this.http
      .get(`https://cors-anywhere.herokuapp.com/https://welcomcity.herokuapp.com/test/experiencias`)
  }

  loadExperienciaById(id) {
    return this.http
      .get(`https://cors-anywhere.herokuapp.com/https://welcomcity.herokuapp.com/test/experiencias/${id}`);
  }

  loadFotos() {
    return this.http
      .get(`https://cors-anywhere.herokuapp.com/https://welcomcity.herokuapp.com/test/fotos`)
  }

  loadHoteles() {
    return this.http
      .get(`https://cors-anywhere.herokuapp.com/https://welcomcity.herokuapp.com/test/hoteles`)
  }

  loadOfertas() {
    return this.http
      .get(`https://cors-anywhere.herokuapp.com/https://welcomcity.herokuapp.com/test/ofertas`)
  }

  loadPerfiles() {
    return this.http
      .get(`https://cors-anywhere.herokuapp.com/https://welcomcity.herokuapp.com/test/perfiles`)
  }

  loadRoles() {
    return this.http
      .get(`https://cors-anywhere.herokuapp.com/https://welcomcity.herokuapp.com/test/roles`)
  }

  loadServicios() {
    return this.http
      .get(`https://cors-anywhere.herokuapp.com/https://welcomcity.herokuapp.com/test/servicios`)
  }

  loadTipos() {
    return this.http
      .get(`https://cors-anywhere.herokuapp.com/https://welcomcity.herokuapp.com/test/tipos`)
  }

}
