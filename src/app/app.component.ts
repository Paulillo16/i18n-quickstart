import { Component } from '@angular/core';
import { AppModule } from './app.module';
import { Configuracion } from './configuracion';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './app.component.html'
})

export class AppComponent {

  showHeading = true;
  heroes = ['Magneta', 'Bombasto', 'Magma', 'Tornado'];
  idiomas = Configuracion.datos.idiomas;

  toggleHeading() {
    this.showHeading = !this.showHeading;
  }

  // Se establece el idioma indicado
  public estableceIdioma(idioma: string): void {
    var idiomaDefecto = Configuracion.datos.idiomas[0].codigo;
    var lang = idioma || idiomaDefecto;
    localStorage.setItem('localeId', lang);
    document['locale'] = lang;
    location.reload(true);
    console.log(`Idioma establecido a [${lang}]`);
  }

}
