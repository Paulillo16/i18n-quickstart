// Fichero de Configuración del Sistema

export class Configuracion {
    
    public static datos: any = {

        // Idiomas soportados por la aplicación.
        // Para añadir / quitar un idioma solo hay que quitarlo
        // de la configuración y la aplicación lo detectará automáticamente.
        idiomas: 
            [
                { descripcion: 'Español', codigo: 'es'   },
                { descripcion: 'English', codigo: 'en'   }
            ]
    }
    
    constructor() {
    }

}