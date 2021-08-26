import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JoaoMariaPage } from './joao-maria.page';

const routes: Routes = [
  {
    path: '',
    component: JoaoMariaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JoaoMariaPageRoutingModule {}
