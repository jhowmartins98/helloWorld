import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChuteirasPageRoutingModule } from './chuteiras-routing.module';

import { ChuteirasPage } from './chuteiras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChuteirasPageRoutingModule
  ],
  declarations: [ChuteirasPage]
})
export class ChuteirasPageModule {}
