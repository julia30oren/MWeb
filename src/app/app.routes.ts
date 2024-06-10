import { Routes } from '@angular/router';
import {FirstComponent} from './components/first/first.component';
import {SecondComponent} from './components/second/second.component';

export const routes: Routes = [
    { path: 'first-component', component: FirstComponent },
    { path: 'second-component', component: SecondComponent },
    { path: '',   redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
    { path: '**', 
        loadComponent: () =>
            import('./components/pnf/pnf.component').then((c)=>c.PnfComponent), // lazy load of component
     },  // Wildcard route for a 404 page
  ];
