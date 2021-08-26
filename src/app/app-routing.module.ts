import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'o-poderoso-chefao',
    loadChildren: () => import('./filmes/o-poderoso-chefao/o-poderoso-chefao.module').then( m => m.OPoderosoChefaoPageModule)
  },
  {
    path: 'joao-maria',
    loadChildren: () => import('./filmes/joao-maria/joao-maria.module').then( m => m.JoaoMariaPageModule)
  },
  {
    path: 'hotel-transilvania',
    loadChildren: () => import('./filmes/hotel-transilvania/hotel-transilvania.module').then( m => m.HotelTransilvaniaPageModule)
  },
  {
    path: 'gente-grande',
    loadChildren: () => import('./filmes/gente-grande/gente-grande.module').then( m => m.GenteGrandePageModule)
  },
  {
    path: 'invocacao',
    loadChildren: () => import('./filmes/invocacao/invocacao.module').then( m => m.InvocacaoPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
