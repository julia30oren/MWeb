import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { BlogComponent } from './components/blog/blog.component';

export const routes: Routes = [
    { path: '', component: AboutComponent },
    { path: 'about', component: AboutComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: '**', 
        loadComponent: () =>
            import('./components/unfound/unfound.component').then((c)=>c.UnfoundComponent), // lazy load of component
     },  // Wildcard route for a 404 page
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {enableTracing: true})
    ],
    exports: [RouterModule]
})
export class RoutingModule{

}