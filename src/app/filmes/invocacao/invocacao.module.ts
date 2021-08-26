import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvocacaoPageRoutingModule } from './invocacao-routing.module';

import { InvocacaoPage } from './invocacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvocacaoPageRoutingModule
  ],
  declarations: [InvocacaoPage]
})
export class InvocacaoPageModule {}
