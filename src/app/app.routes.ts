import { Routes } from '@angular/router';

export const routes: Routes = [

  {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full',
  },
  {
      path: 'home',
      loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'collections',
    loadComponent: () => import('./collections/collections.component').then(m => m.CollectionsComponent)
  },
  {
    path: 'about-us',
    loadComponent: () => import('./about-us/about-us.component').then(m => m.AboutUsComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent)
  },
];
