import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChuteirasPage } from './chuteiras.page';

const routes: Routes = [
  {
    path: '',
    component: ChuteirasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChuteirasPageRoutingModule {}
