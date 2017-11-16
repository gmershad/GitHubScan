
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { homeRoutes }    from './home/home.routes';
import { detailRoutes }    from './detail/detail.routes';

// Route Configuration
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  ...homeRoutes,
  ...detailRoutes
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
