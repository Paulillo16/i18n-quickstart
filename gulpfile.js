var gulp = require('gulp');
var runSequence = require('run-sequence');
var run = require('gulp-run');
var cheerio = require('gulp-cheerio');
var rename = require('gulp-rename');
var mergeStream = require('merge-stream');
var modifyFile = require('gulp-modify-file');
var gulpCopy = require('gulp-copy');
var Configuracion = require('./src/app/configuracion');
var fs = require('fs');
var idiomaDefecto = Configuracion.Configuracion.datos.idiomas[0].codigo;
var sourceElements = [];

// Tarea que encadena varias tareas.
gulp.task('i18n-build', function() {
    //runSequence('i18n-extract-xlf', 'i18n-default','i18n-merge-to-translations');
    runSequence('i18n-extract-xlf', 'i18n-default','i18n-merge-to-translations', 'i18n-xlf2ts');
});


// Ejecuta ng-xi18n para generar el fichero messages.xlf
gulp.task('i18n-extract-xlf', function () {
    return run('npm run i18n').exec();
});


// Copia todos los valores de la etiqueta 'source' a la etiqueta 'target'
// en un fichero llamado messages.es.xlf
gulp.task('i18n-default', ['create-file-i18n-not-exists'], function () {
    return gulp.src('./src/locale/messages.xlf')
        .pipe(cheerio({
            run: function ($, file) {
                // Cada fichero se ejecutará a traves de Cheerio y cada '$' 
                // correspondiente será pasada aquí.
                // `file` es el objeto fichero de gulp.
                $('source').each(function () {
                    var source = $(this);
                    var target = source.parent().find('target');
                    //source.text(source.text().toUpperCase());
                    target.html(source.html());
                });
            },
            parserOptions: {
                xmlMode: true
            }
        }))
        .pipe(rename('messages.'+idiomaDefecto+'.xlf'))
        .pipe(gulp.dest("./src/locale"))
});


// Devuelve el fichero de recursos messages.es.xlf
gulp.task('i18n-get-source', function () {
    return gulp.src('./src/locale/messages.'+idiomaDefecto+'.xlf')
        .pipe(cheerio({
            run: function ($, file) {
                $('trans-unit').each(function () {
                    sourceElements.push($(this));
                });
            },
            parserOptions: {
                xmlMode: true
            }
        }));
});


// Compara el fichero de mensajes que genera i18n en español y revisa
// todos los idiomas configurados e incorpora los mensajes faltantes 
// (sin traducir) a estos ficheros.
gulp.task('i18n-merge-to-translations', ['i18n-get-source'], function () {
    var languages = Configuracion.Configuracion.datos.idiomas;
    var tasks = [];
    for (var language of languages) {
        var path = "./src/locale/messages." + language.codigo + ".xlf";
        tasks.push(
            gulp.src(path)
                .pipe(cheerio({
                    run: function ($, file) {
                        var sourceIds = [];
                        for (var sourceElement of sourceElements) {
                            var id = $(sourceElement).attr('id');
                            sourceIds.push(id);
                            var targetElement = $('#' + id);
                            if (targetElement.length == 0) {
                                // Mensajes sin traducir
                                $('body').append('\t<!-- Sin traducir -->\n\t\t\t');
                                $('body').append(sourceElement);
                                $('body').append('\n\t\t');
                            }
                        }
                        // Ahora se eliminan todos los elementos repetidos
                        $('trans-unit').map((function () {
                            var id = $(this).attr('id');
                            var existing = sourceIds.find((item) => { return item == id });

                            if (!existing) {
                                console.log("REMOVING");
                                // Se elimina 
                                $('#' + id).remove();
                            }
                        }));
                    },
                    parserOptions: {
                        xmlMode: true
                    }
                }))
                .pipe(gulp.dest('./src/locale')));
    }
    return mergeStream(tasks);
});
 

// Crea ficheros .ts de todos los ficheros .xlf para poder importarlos.
gulp.task('i18n-xlf2ts', function () {
    return gulp.src("./src/locale/*.xlf")
        .pipe(rename(function (path) {
            path.extname = ".ts"
        }))
        .pipe(modifyFile(function (content, path, file) {
            var filename = path.replace(/^.*[\\\/]/, '')
            var language = filename.split(".")[1].toUpperCase();
            return "export const TRANSLATION_" + language + " = `" + content + "`;";
        }))
        .pipe(gulp.dest("./src/locale"));
});


// Crea los ficheros de idiomas soportados que no existan a partir
// del contenido del fichero base messages.xlf
gulp.task('create-file-i18n-not-exists', function () {
    var languages = Configuracion.Configuracion.datos.idiomas;
    for (var language of languages) {
        var path = "./src/locale/messages." + language.codigo + ".xlf";
        if (!fs.existsSync(path)) {
            gulp.src('./src/locale/messages.xlf')
                .pipe(
                    cheerio({
                        run: function ($, file) {
                            // Cada fichero se ejecutará a traves de Cheerio y cada '$' 
                            // correspondiente será pasada aquí.
                            // `file` es el objeto fichero de gulp.
                            $('source').each(function () {
                                var source = $(this);
                                var target = source.parent().find('target');
                                //source.text(source.text().toUpperCase());
                                target.html(source.html());
                            });
                        },
                        parserOptions: {
                            xmlMode: true
                        }
                    }))
                .pipe(rename('messages.'+language.codigo+'.xlf'))
                .pipe(gulp.dest("./src/locale"));
        }
    }
});


// Copia los ficheros de distribución necesarios para la traspilación AOT
// que el propio traspilador no es capaz de copiar de forma automática.
gulp.task('copy-dist-files', function () {
    var resources = [
        'node_modules/core-js/client/shim.min.js',
        'node_modules/zone.js/dist/zone.min.js',
        'src/styles.css'
    ];
    var destination = 'aot/';
    return gulp
        .src(resources)
        .pipe(gulp.dest(destination))
        .pipe(gulp.src('src/locale/*')
            .pipe(gulp.dest(destination + '/src/locale'))
        );
});
 

// Tarea por defecto
gulp.task('default', function () { 
    console.log('Ups! Esta es la tarea por defecto. No se ha ejecutado nada.') 
});
