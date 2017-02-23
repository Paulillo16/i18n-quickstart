"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./app/app.module');
var i18n_providers_1 = require('./app/i18n-providers');
console.log('Ejecutando transpilación JIT');
i18n_providers_1.getTranslationProviders().then(function (providers) {
    var options = { providers: providers };
    platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule, options);
});
//# sourceMappingURL=main.js.map