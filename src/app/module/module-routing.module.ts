import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ViewProductsComponent } from '../productsComp/view-products/view-products.component';
import { ProductsDescComponent } from '../productsComp/products-desc/products-desc.component';

const routes: Routes = [
    {path:'' , redirectTo:'menu', pathMatch:'full' },
    {path:'menu' ,component:ToolbarComponent , children:[
      {path:'' , redirectTo:'home' , pathMatch:'full'},
      {path:'home' , component:HomePageComponent , children:[
        {path:"login" , component:LoginComponent},

      ]},
    
      {path:'view-all', component:ViewProductsComponent},
      {path:'productDesc' , component:ProductsDescComponent}
    ]}
  
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleRoutingModule { }
