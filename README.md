Este proyecto incorpora el paquete básico QuickStart que Angular 2 recomienda
clonar para empezar el desarrollo de cualquier proyecto Angular 2.



Además incorpora las siguientes mejoras / personalizaciones:

    - Compilación AOT (recomendado para producción) y JIT (recomendado para desarrollo).
    - I18n con ng-xi18n.
    - Gestor de taresas automatizadas Gulp.



La instalación que se explica se ha probado en Windows 10 usando el Shell de Windows.
Los pasos para realizarla son los siguientes:

    1. Crear un directorio donde alojar el proyecto. El directorio debe tener el nombre
       que se le vaya a dar al proyecto a la hora de clonarlo. En pricipio se puede llamar 
       quickstart, ya habrá tiempo luego de cambiarle el nombre al directorio-proyecto:

        mkdir quickstart
    
    2. Clonar el proyecto:
    
        git clone https://github.com/Paulillo16/i18n-quickstart.git i18n-quickstart

    3. Situarse en el directorio del proyecto:
        
        cd quickstart
    
    4. Instalar todas las las dependencias:
       
        npm install

    5. Limpiar proyecto / eliminar los ficheros innecesarios. Estos comandos deben
       lanzarse desde el CMD de Windows (en Shell no funciona).

        for /f %i in (non-essential-files.txt) do del %i /F /S /Q
        rd .git /s /q
        rd e2e /s /q
     


El proyecto incorpora un montón de script para automatizar y realizar distintas tareas.
A continuación se explican las más importantes, pero se pueden consultar todos en el
fichero package.json.

    - npm run start : 
            Genera el fichero de idioma por defecto (Español).
            Transpila el proyecto con JIT. 
            Arranca el proyecto transpilado con JIT con lite-serve y abre el navegador.

    - npm run build:watch o build : 
            Transpila el proyecto con JIT.

    - npm run serve : 
            Arranca el proyecto transpilado con JIT con lite-serve y abre el navegador. 
            No transpila, simplemente inicia el servidor con la transpilación de JIT 
            existente.

    - npm run start:aot : 
            Genera el fichero de idioma por defecto (Español) y añade a los idiomas
            configurados los mensajes existentes en el fichero por defecto que no
            existen en los ficheros de traducciones.
            Transpila el proyecto con AOT. 
            Arranca el proyecto transpilado con AOT con lite-serve y abre el navegador.

    - npm run build:aot: 
            Genera el fichero de idioma por defecto (Español) y añade a los idiomas
            configurados los mensajes existentes en el fichero por defecto que no
            existen en los ficheros de traducciones.
            Copia los ficheros no transpilables al directorio 'aot' (menssages.*.xlf, *.css, etc). 
            Transpila el proyecto con AOT. 

    - npm run serve:aot : 
            Arranca el proyecto transpilado con AOT con lite-serve y abre el navegador. 
            No transpila, simplemente inicia el servidor con la transpilación de AOT 
            existente.

    - npm run i18n :
            Extrae de todos los ficheros html las cadenas de textos identificadas como 
            i18n y genera un fichero de traducciones siguiendo lsa instrucciones de
            tsconfig.i18n.json.
    
    - npm run gulp:i18n :
            Extrae todas las traducciones de la app (npm run i18n) en locale/messages.xlf,
            realiza una copia de este, la renombra como messages.es.xlf y completa todos las
            etiquetas target con el valor indicado en la etiqueta source.
            Genera un fichero de traducción por lenguaje soportado en el caso de que no exista
            el fichero para el idioma. En el caso de que exista, le añade todas los mensajes
            de traducciones que no se encuentran reflejados.
            Los idiomas soportados se encuentran indicados en el fichero de configuración
            app/configuracion.json.

    - npm run gulp:copyFilesAOT :
            Copia los ficheros que el transpilado AOT no transpasa al directorio de destino
            de ficheros transpilados (./aot). Como por ejemplo ficheros de mensajes de
            idiomas, librerias necesarias y que se quedan fuera de la transpilación, css, etc.



Para realizar las personalizaciones se han utilizado las siguietes referencias externas:

    - QuickStart: https://angular.io/docs/ts/latest/guide/setup.html
    - AOT-JIT:    https://angular.io/docs/ts/latest/cookbook/aot-compiler.html
    - I18N:       https://angular.io/docs/ts/latest/cookbook/i18n.html
    - GULP+I18N:  http://rolandoldengarm.com/index.php/2016/10/17/angular-2-automated-i18n-workflow-using-gulp
