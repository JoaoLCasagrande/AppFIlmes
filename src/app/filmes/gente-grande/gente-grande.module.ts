import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenteGrandePageRoutingModule } from './gente-grande-routing.module';

import { GenteGrandePage } from './gente-grande.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenteGrandePageRoutingModule
  ],
  declarations: [GenteGrandePage]
})
export class GenteGrandePageModule {}
