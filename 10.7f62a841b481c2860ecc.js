(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{tmrb:function(o,i,n){"use strict";n.r(i),n.d(i,"Tab1PageModule",(function(){return x}));var e=n("TEn/"),r=n("ofXK"),t=n("3Pt+"),c=n("qtYk"),b=n("tyNb"),a=n("fXoL"),s=n("N+K7");function l(o,i){if(1&o&&(a.Kb(0,"ion-item"),a.Kb(1,"ion-label"),a.Kb(2,"h2"),a.ac(3),a.Jb(),a.Kb(4,"h2"),a.ac(5),a.Jb(),a.Kb(6,"p"),a.ac(7),a.Jb(),a.Jb(),a.Jb()),2&o){var n=i.$implicit;a.xb(3),a.bc(n.id),a.xb(2),a.bc(n.nombre),a.xb(2),a.bc(n.password)}}function u(o,i){if(1&o&&(a.Kb(0,"ion-item"),a.Kb(1,"ion-label"),a.Kb(2,"h2"),a.ac(3),a.Jb(),a.Kb(4,"h2"),a.ac(5),a.Jb(),a.Kb(6,"p"),a.ac(7),a.Jb(),a.Jb(),a.Jb()),2&o){var n=i.$implicit;a.xb(3),a.bc(n.id),a.xb(2),a.bc(n.nombre),a.xb(2),a.bc(n.descripcion)}}function p(o,i){if(1&o&&(a.Kb(0,"ion-select-option",5),a.ac(1),a.Jb()),2&o){var n=i.$implicit;a.Vb("value",n.id),a.xb(1),a.bc(n.nombre)}}function d(o,i){if(1&o&&(a.Kb(0,"ion-item"),a.Kb(1,"ion-label"),a.Kb(2,"h2"),a.ac(3),a.Jb(),a.Jb(),a.Jb()),2&o){var n=i.$implicit;a.xb(3),a.bc(n)}}var f=[{path:"",component:function(){function o(o){this.http=o,this.cargarListadoExperiencias()}return o.prototype.mostrarUsuarios=function(){var o=this;console.log("pulsado el boton de mostrar usuarios"),this.http.loadUsers().subscribe((function(i){console.log(i),o.usuarios=i}),(function(o){console.error(o)}))},o.prototype.mostrarExperiencias=function(){var o=this;console.log("pulsado el boton de mostrar experiencias"),this.http.loadExperiencias().subscribe((function(i){console.log(i),o.listaExperiencia=i}),(function(o){console.error(o)}))},o.prototype.borrarListadoUsuarios=function(){console.log("borrando listado de usuarios"),this.usuarios.length=0},o.prototype.borrarListadoExperiencias=function(){console.log("borrando listado de experiencias"),this.listaExperiencia.length=0},o.prototype.borrarListadoExp=function(){console.log("borrando listado de usuarios"),this.item.length=0},o.prototype.mostrarExperienciaById=function(){var o=this;this.http.loadExperienciaById(this.idExperiencia).subscribe((function(i){console.log(i),console.log(i.id),console.log(i.nombre),console.log(i.descripcion),console.log(i.precio),console.log(i.puntuacion),o.item=[i.id,i.nombre,i.descripcion,i.precio,i.puntuacion],console.log(o.item),console.log(typeof o.item),console.log(o.item)}),(function(o){console.error(o)}))},o.prototype.cargarListadoExperiencias=function(){var o=this;this.http.loadExperiencias().subscribe((function(i){console.log(i),o.experiencias=i}),(function(o){console.error(o)}))},o.\u0275fac=function(i){return new(i||o)(a.Hb(s.a))},o.\u0275cmp=a.Bb({type:o,selectors:[["app-tab1"]],decls:32,vars:5,consts:[[4,"ngFor","ngForOf"],[3,"click"],["color","danger",3,"click"],[3,"ngModel","ngModelChange","ionChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(o,i){1&o&&(a.Kb(0,"ion-header"),a.Kb(1,"ion-toolbar"),a.Kb(2,"ion-title"),a.Kb(3,"h2"),a.ac(4,"test API WelcomeCityapp"),a.Jb(),a.Jb(),a.Jb(),a.Jb(),a.Kb(5,"ion-content"),a.Kb(6,"h3"),a.ac(7,"Usuarios:"),a.Jb(),a.Kb(8,"ion-list"),a.Zb(9,l,8,3,"ion-item",0),a.Jb(),a.Kb(10,"ion-button",1),a.Rb("click",(function(){return i.mostrarUsuarios()})),a.ac(11,"Mostrar Usuarios"),a.Jb(),a.Kb(12,"ion-button",2),a.Rb("click",(function(){return i.borrarListadoUsuarios()})),a.ac(13,"Borrar"),a.Jb(),a.Kb(14,"h3"),a.ac(15,"Experiencias:"),a.Jb(),a.Kb(16,"ion-list"),a.Zb(17,u,8,3,"ion-item",0),a.Jb(),a.Kb(18,"ion-button",1),a.Rb("click",(function(){return i.mostrarExperiencias()})),a.ac(19,"Mostrar Experiencias"),a.Jb(),a.Kb(20,"ion-button",2),a.Rb("click",(function(){return i.borrarListadoExperiencias()})),a.ac(21,"Borrar"),a.Jb(),a.Kb(22,"h3"),a.ac(23,"Selecciona una experiencia"),a.Jb(),a.Kb(24,"ion-item"),a.Kb(25,"ion-label"),a.ac(26,"experiencia:"),a.Jb(),a.Kb(27,"ion-select",3),a.Rb("ngModelChange",(function(o){return i.idExperiencia=o}))("ionChange",(function(){return i.mostrarExperienciaById()})),a.Zb(28,p,2,2,"ion-select-option",4),a.Jb(),a.Jb(),a.Zb(29,d,4,1,"ion-item",0),a.Kb(30,"ion-button",2),a.Rb("click",(function(){return i.borrarListadoExp()})),a.ac(31,"Borrar Experiencias"),a.Jb(),a.Jb()),2&o&&(a.xb(9),a.Vb("ngForOf",i.usuarios),a.xb(8),a.Vb("ngForOf",i.listaExperiencia),a.xb(10),a.Vb("ngModel",i.idExperiencia),a.xb(1),a.Vb("ngForOf",i.experiencias),a.xb(1),a.Vb("ngForOf",i.item))},directives:[e.g,e.t,e.s,e.f,e.k,r.h,e.b,e.i,e.j,e.n,e.y,t.d,t.e,e.o],styles:[""]}),o}()}],g=function(){function o(){}return o.\u0275mod=a.Fb({type:o}),o.\u0275inj=a.Eb({factory:function(i){return new(i||o)},imports:[[b.i.forChild(f)],b.i]}),o}(),x=function(){function o(){}return o.\u0275mod=a.Fb({type:o}),o.\u0275inj=a.Eb({factory:function(i){return new(i||o)},imports:[[e.u,r.b,t.a,c.a,g]]}),o}()}}]);