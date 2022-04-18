import { HuhuComponent } from './huhu/huhu.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrangchuComponent } from './trangchu/trangchu.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/trangchu',
    pathMatch: 'full',
  },
  {
    path: 'trangchu', 
    component: TrangchuComponent
  },
  {
    path: 'huhu', 
    component: HuhuComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
