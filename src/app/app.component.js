var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Configuracion } from './configuracion';
export var AppComponent = (function () {
    function AppComponent() {
        this.showHeading = true;
        this.heroes = ['Magneta', 'Bombasto', 'Magma', 'Tornado'];
        this.idiomas = Configuracion.datos.idiomas;
    }
    AppComponent.prototype.toggleHeading = function () {
        this.showHeading = !this.showHeading;
    };
    // Se establece el idioma indicado
    AppComponent.prototype.estableceIdioma = function (idioma) {
        var idiomaDefecto = Configuracion.datos.idiomas[0].codigo;
        var lang = idioma || idiomaDefecto;
        localStorage.setItem('localeId', lang);
        document['locale'] = lang;
        location.reload(true);
        console.log("Idioma establecido a [" + lang + "]");
    };
    AppComponent = __decorate([
        Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: './app.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map