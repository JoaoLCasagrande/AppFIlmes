import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvocacaoPage } from './invocacao.page';

const routes: Routes = [
  {
    path: '',
    component: InvocacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvocacaoPageRoutingModule {}
