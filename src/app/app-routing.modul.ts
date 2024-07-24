import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { PnfComponent } from './components/pnf/pnf.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', pathMatch: 'full', component: HomeComponent },
    { path: 'blog', pathMatch: 'full', component: BlogComponent },
    { path: '**', component: PnfComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };
// export const routingComponents = [HomeComponent, BlogComponent, PnfComponent]