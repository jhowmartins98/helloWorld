import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeiasPage } from './meias.page';

const routes: Routes = [
  {
    path: '',
    component: MeiasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeiasPageRoutingModule {}
