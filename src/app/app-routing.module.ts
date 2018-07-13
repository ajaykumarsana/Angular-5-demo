import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewcompComponent } from './newcomp/newcomp.component';
import { TempComponent } from './temp/temp.component';

const routes: Routes = [
  {
    path: '',
    component: NewcompComponent
  },
  {
    path: 'temp/:id',
    component: TempComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
