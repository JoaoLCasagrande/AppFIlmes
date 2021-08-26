import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JoaoMariaPageRoutingModule } from './joao-maria-routing.module';

import { JoaoMariaPage } from './joao-maria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JoaoMariaPageRoutingModule
  ],
  declarations: [JoaoMariaPage]
})
export class JoaoMariaPageModule {}
