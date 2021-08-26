import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenteGrandePage } from './gente-grande.page';

const routes: Routes = [
  {
    path: '',
    component: GenteGrandePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenteGrandePageRoutingModule {}
