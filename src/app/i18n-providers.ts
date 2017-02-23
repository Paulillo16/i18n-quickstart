import { TRANSLATIONS, TRANSLATIONS_FORMAT, LOCALE_ID } from '@angular/core';
import { Configuracion } from './configuracion';

export function getTranslationProviders(): Promise<Object[]> {
  
  // Se rescata el idioma del navegador.
  var localeId = localStorage.getItem('localeId') as string;

  // Se carga el idioma por defecto desde la configuración
  var idiomaDefecto : string = Configuracion.datos.idiomas[0].codigo;

  // Si no existe idioma en el navegador, se establece el idioma
  // por defecto.
  if(!localeId) {
    localStorage.setItem('localeId', idiomaDefecto);
    localeId = idiomaDefecto;
  }

  // Se establece el idioma como constante global
  const locale = localeId;

  // No devuelve proveedores si falla al obtener el archivo de traducción 
  // para la configuración regional
  const noProviders: Object[] = [];

  // Los idiomas soportados no incluyen el idioma por defecto.
  var idiomasSoportados = Configuracion.datos.idiomas;

  // Por defecto el idioma indicado no se encuentra soportado, por eso
  // se controla de la siguiente forma
  var isIdiomaSoportado : boolean = false;

  // Se comprueba si el idioma seleccionado se encuentra entre
  // los idiomas soportados.
  for (let idioma of idiomasSoportados) {
    if(idioma.codigo === locale) {
        isIdiomaSoportado = true;
        break;
    }
  }
  
  if(!isIdiomaSoportado) {
    console.error(`No existe fichero de recursos para idioma ${locale}`);
  }

  // No se carga ningún fichero de recursos si se da alguno
  // de los siguientes casos:
  //    - Si no se ha especificado idioma.
  //    - Si el idioma indicado coincide con el idioma por defecto.
  //    - Si el idioma indicado no se encuentra soportado (no tenemos traducción).
  if (!locale || locale === idiomaDefecto || !isIdiomaSoportado) {
    return Promise.resolve(noProviders);
  }

  const translationFile = `./locale/messages.${locale}.xlf`;
  return getTranslationsWithSystemJs(translationFile)
    .then( (translations: string ) => [
      { provide: TRANSLATIONS, useValue: translations },
      { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' },
      { provide: LOCALE_ID, useValue: locale }
    ])
    .catch(() => noProviders); // Si el fichero no se encuentra, se ignora
}

declare var System: any;

function getTranslationsWithSystemJs(file: string) {
  return System.import(file + '!text');
}
