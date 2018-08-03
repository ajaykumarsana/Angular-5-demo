import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewcompComponent } from './newcomp/newcomp.component';
import { TempComponent } from './temp/temp.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { StockComponent } from './stock/stock.component';




const routes: Routes = [
  {
    path: '',
    component: NewcompComponent
  },
  {
    path: 'temp/:id',
    component: TempComponent
  },
  {
    path: 'IO',
    component: InputOutputComponent
  },
  {
    path: 'stock',
    component: StockComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
