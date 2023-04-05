import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },  {
    path: 'ines',
    loadComponent: () => import('./ines/ines.page').then( m => m.InesPage)
  },
  {
    path: 'iara',
    loadComponent: () => import('./iara/iara.page').then( m => m.IaraPage)
  },
  {
    path: 'isac',
    loadComponent: () => import('./isac/isac.page').then( m => m.IsacPage)
  },
  {
    path: 'ibere',
    loadComponent: () => import('./ibere/ibere.page').then( m => m.IberePage)
  },
  {
    path: 'tutu',
    loadComponent: () => import('./tutu/tutu.page').then( m => m.TutuPage)
  },

];
