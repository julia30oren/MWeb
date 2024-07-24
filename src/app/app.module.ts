import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.modul';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { PnfComponent } from './components/pnf/pnf.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
FirstComponent,
SecondComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }