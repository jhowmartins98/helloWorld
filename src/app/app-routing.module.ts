import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ofertas',
    loadChildren: () => import('./promocoes/promocoes.module').then( m => m.PromocoesPageModule)
  },
  {
    path: 'camisas',
    loadChildren: () => import('./camisas/camisas.module').then( m => m.CamisasPageModule)
  },
  {
    path: 'shorts',
    loadChildren: () => import('./shorts/shorts.module').then( m => m.ShortsPageModule)
  },
  {
    path: 'chuteiras',
    loadChildren: () => import('./chuteiras/chuteiras.module').then( m => m.ChuteirasPageModule)
  },
  {
    path: 'meias',
    loadChildren: () => import('./meias/meias.module').then( m => m.MeiasPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
