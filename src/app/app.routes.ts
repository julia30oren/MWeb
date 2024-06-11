import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `home`
    { path: '**', 
        loadComponent: () =>
            import('./components/pnf/pnf.component').then((c)=>c.PnfComponent), // lazy load of component
     },  // Wildcard route for a 404 page
  ];
