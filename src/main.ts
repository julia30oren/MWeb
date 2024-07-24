import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { enableProdMode } from "@angular/core";
import { environment } from './environments/environment';
// import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
// import { AppModule } from "./app/app.module";

bootstrapApplication(AppComponent)
  .catch((err) => console.error(err));

if(environment.production){
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(AppModule).catch(err=>console.log(err));