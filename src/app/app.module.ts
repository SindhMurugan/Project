import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { Store, StoreModule } from '@ngrx/store';
// import { Product, product } from './interface.model';
import { CreateReducer } from './store/action/app.reducer';
import { AppState } from './store/app.state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { ViewProductsComponent } from './productsComp/view-products/view-products.component';

@NgModule({
  declarations: [
    AppComponent,
    // ViewProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({product:CreateReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
      
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
