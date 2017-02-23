import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from '../aot/src/app/app.module.ngfactory';
console.log('Ejecutando transpilación AOT');
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
//# sourceMappingURL=main-aot.js.map