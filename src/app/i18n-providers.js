"use strict";
var core_1 = require('@angular/core');
var configuracion_1 = require('./configuracion');
function getTranslationProviders() {
    // Se rescata el idioma del navegador.
    var localeId = localStorage.getItem('localeId');
    // Se carga el idioma por defecto desde la configuración
    var idiomaDefecto = configuracion_1.Configuracion.datos.idiomas[0].codigo;
    // Si no existe idioma en el navegador, se establece el idioma
    // por defecto.
    if (!localeId) {
        localStorage.setItem('localeId', idiomaDefecto);
        localeId = idiomaDefecto;
    }
    // Se establece el idioma como constante global
    var locale = localeId;
    // No devuelve proveedores si falla al obtener el archivo de traducción 
    // para la configuración regional
    var noProviders = [];
    // Los idiomas soportados no incluyen el idioma por defecto.
    var idiomasSoportados = configuracion_1.Configuracion.datos.idiomas;
    // Por defecto el idioma indicado no se encuentra soportado, por eso
    // se controla de la siguiente forma
    var isIdiomaSoportado = false;
    // Se comprueba si el idioma seleccionado se encuentra entre
    // los idiomas soportados.
    for (var _i = 0, idiomasSoportados_1 = idiomasSoportados; _i < idiomasSoportados_1.length; _i++) {
        var idioma = idiomasSoportados_1[_i];
        if (idioma.codigo === locale) {
            isIdiomaSoportado = true;
            break;
        }
    }
    if (!isIdiomaSoportado) {
        console.error("No existe fichero de recursos para idioma " + locale);
    }
    // No se carga ningún fichero de recursos si se da alguno
    // de los siguientes casos:
    //    - Si no se ha especificado idioma.
    //    - Si el idioma indicado coincide con el idioma por defecto.
    //    - Si el idioma indicado no se encuentra soportado (no tenemos traducción).
    if (!locale || locale === idiomaDefecto || !isIdiomaSoportado) {
        return Promise.resolve(noProviders);
    }
    var translationFile = "./locale/messages." + locale + ".xlf";
    return getTranslationsWithSystemJs(translationFile)
        .then(function (translations) { return [
        { provide: core_1.TRANSLATIONS, useValue: translations },
        { provide: core_1.TRANSLATIONS_FORMAT, useValue: 'xlf' },
        { provide: core_1.LOCALE_ID, useValue: locale }
    ]; })
        .catch(function () { return noProviders; }); // Si el fichero no se encuentra, se ignora
}
exports.getTranslationProviders = getTranslationProviders;
function getTranslationsWithSystemJs(file) {
    return System.import(file + '!text');
}
//# sourceMappingURL=i18n-providers.js.map