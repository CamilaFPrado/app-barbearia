import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// Inicializa a aplicação Angular usando o AppModule
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
