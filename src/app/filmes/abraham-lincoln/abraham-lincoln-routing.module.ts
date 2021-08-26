import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbrahamLincolnPage } from './abraham-lincoln.page';

const routes: Routes = [
  {
    path: '',
    component: AbrahamLincolnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbrahamLincolnPageRoutingModule {}
