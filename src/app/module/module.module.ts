import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleRoutingModule } from './module-routing.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { ProductsComponent } from './products/products.component';
import { StoreModule } from '@ngrx/store';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CardProductsComponent } from './card-products/card-products.component';
import {MatBadgeModule} from '@angular/material/badge';




@NgModule({
  declarations: [ToolbarComponent , HomePageComponent, LoginComponent, SlideshowComponent, ProductsComponent, CardProductsComponent],
  imports: [
    CommonModule,
    ModuleRoutingModule,
    MatToolbarModule,
    MatMenuModule,MatButtonModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    MatSnackBarModule,
    MatBadgeModule
   
    

  ],
  providers:[ provideHttpClient()]
})
export class ModuleModule { }
