(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Tab 1\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Tab 1</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <app-explore-container name=\"Tab 1 page\"></app-explore-container>\n</ion-content>-->\n\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n     <h2>test API WelcomeCityapp</h2>\n    </ion-title>\n  </ion-toolbar>\n </ion-header>\n \n\n <ion-content>\n  <h3>Usuarios:</h3> \n  <ion-list>\n    <ion-item *ngFor=\"let usuario of usuarios\">\n     <!--<ion-avatar slot=\"start\">\n        <img [src]=\"usuario.picture.medium\">\n      </ion-avatar>-->\n      \n      <ion-label>\n      \n      <h2>{{ usuario.id }}</h2>\n      <h2>{{ usuario.nombre }}</h2>\n      <p>{{ usuario.password }}</p>\n      <!--<p>{{ usuario.password }}</p>-->\n    </ion-label>\n    </ion-item>\n  </ion-list>\n\n  <ion-button (click) = \"mostrarUsuarios()\">Cargar Usuarios</ion-button>\n  <ion-button  color=\"danger\" (click) = \"borrarListadoUsuarios()\">Borrar</ion-button>\n\n  <h3>Selecciona una experiencia</h3>\n  <ion-item>\n    <ion-label>experiencia:</ion-label> \n    <ion-select  [(ngModel)]=\"idExperiencia\" (ionChange)=\"mostrarExperienciaById()\">\n      <!--<ion-select-option select  >Selecciona una experiencia</ion-select-option>-->\n      <ion-select-option *ngFor=\"let experiencia of experiencias\" [value]= 'experiencia.id'>{{ experiencia.nombre }}</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n<ion-item *ngFor=\"let i of item\">\n  \n   <ion-label> \n  <h2>{{ i }}</h2>  \n  </ion-label>\n  \n</ion-item>\n<ion-button  color=\"danger\" (click) = \"borrarListadoExp()\">Borrar Experiencias</ion-button>\n \n  \n  \n\n  \n</ion-content>\n\n  \n   \n  \n\n");

/***/ }),

/***/ "./src/app/tab1/tab1-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");




var routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"],
    }
];
var Tab1PageRoutingModule = /** @class */ (function () {
    function Tab1PageRoutingModule() {
    }
    Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], Tab1PageRoutingModule);
    return Tab1PageRoutingModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab1-routing.module */ "./src/app/tab1/tab1-routing.module.ts");








var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
                _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"]
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/http.service */ "./src/app/services/http.service.ts");


//importacion del servicio http

var Tab1Page = /** @class */ (function () {
    function Tab1Page(http) {
        this.http = http;
        //console.log('cargando pagina')
        this.cargarListadoExperiencias();
    }
    Tab1Page.prototype.mostrarUsuarios = function () {
        var _this = this;
        console.log('pulsado el boton de mostrar usuarios');
        this.http.loadUsers().subscribe(function (res) {
            console.log(res);
            _this.usuarios = res;
        }, function (error) {
            console.error(error);
        });
    };
    Tab1Page.prototype.borrarListadoUsuarios = function () {
        console.log('borrando listado de usuarios');
        var listado = this.usuarios;
        listado.length = 0;
    };
    Tab1Page.prototype.borrarListadoExp = function () {
        console.log('borrando listado de usuarios');
        var listado = this.item;
        listado.length = 0;
    };
    Tab1Page.prototype.mostrarExperienciaById = function () {
        var _this = this;
        //console.log(this.idExperiencia)
        //console.log(id)
        this.http.loadExperienciaById(this.idExperiencia).subscribe(function (res) {
            console.log(res);
            console.log(res['id']);
            console.log(res['nombre']);
            console.log(res['descripcion']);
            console.log(res['precio']);
            console.log(res['puntuacion']);
            //this.item = res;
            _this.item = [res['id'], res['nombre'], res['descripcion'], res['precio'], res['puntuacion']];
            console.log(_this.item);
            console.log(typeof (_this.item));
            console.log(_this.item);
        }, function (error) {
            console.error(error);
        });
    };
    Tab1Page.prototype.cargarListadoExperiencias = function () {
        var _this = this;
        this.http.loadExperiencias().subscribe(function (res) {
            console.log(res);
            _this.experiencias = res;
        }, function (error) {
            console.error(error);
        });
    };
    Tab1Page.ctorParameters = function () { return [
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
    ]; };
    Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")).default]
        })
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map