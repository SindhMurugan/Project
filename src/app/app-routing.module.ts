import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewProductsComponent } from './productsComp/view-products/view-products.component';

const routes: Routes = [
  { path: '',loadChildren: () => import('./module/module.module').then(m => m.ModuleModule) , title:'BigBasket'},
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
 
})
export class AppRoutingModule { }
