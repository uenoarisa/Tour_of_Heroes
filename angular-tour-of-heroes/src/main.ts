import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module'; // AppModuleのインポート

platformBrowserDynamic().bootstrapModule(AppModule) // AppModuleをブートストラップ
  .catch(err => console.error(err));
