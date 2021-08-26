import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OPoderosoChefaoPageRoutingModule } from './o-poderoso-chefao-routing.module';

import { OPoderosoChefaoPage } from './o-poderoso-chefao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OPoderosoChefaoPageRoutingModule
  ],
  declarations: [OPoderosoChefaoPage]
})
export class OPoderosoChefaoPageModule {}
