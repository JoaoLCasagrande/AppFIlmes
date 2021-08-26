import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbrahamLincolnPageRoutingModule } from './abraham-lincoln-routing.module';

import { AbrahamLincolnPage } from './abraham-lincoln.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbrahamLincolnPageRoutingModule
  ],
  declarations: [AbrahamLincolnPage]
})
export class AbrahamLincolnPageModule {}
