// Fichero de Configuración del Sistema
export var Configuracion = (function () {
    function Configuracion() {
    }
    Configuracion.datos = {
        // Idiomas soportados por la aplicación.
        // Para añadir / quitar un idioma solo hay que quitarlo
        // de la configuración y la aplicación lo detectará automáticamente.
        idiomas: [
            { descripcion: 'Español', codigo: 'es' },
            { descripcion: 'English', codigo: 'en' }
        ]
    };
    return Configuracion;
}());
//# sourceMappingURL=configuracion.js.map