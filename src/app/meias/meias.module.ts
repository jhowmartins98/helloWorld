import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeiasPageRoutingModule } from './meias-routing.module';

import { MeiasPage } from './meias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeiasPageRoutingModule
  ],
  declarations: [MeiasPage]
})
export class MeiasPageModule {}
