import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OPoderosoChefaoPage } from './o-poderoso-chefao.page';

const routes: Routes = [
  {
    path: '',
    component: OPoderosoChefaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OPoderosoChefaoPageRoutingModule {}
