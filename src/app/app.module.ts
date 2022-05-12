import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './Component/products/products.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import{LightBoxDirective} from './Directive/directive';
import { CreditCardPipe } from './pipe/credit-card.pipe';
import { CartComponent } from './Component/cart/cart.component';
import { NaionalIDPipe } from './pipe/naional-id.pipe';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { MainLyoutComponent } from './Component/main-lyout/main-lyout.component';
import { NotFoundComponent } from './Component/not-found/not-found.component'
import { HomeComponent } from './home/home.component';
import { NewProductComponent } from './Component/new-product/new-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {matDialogAnimations, MatDialogModule } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';

@NgModule({
  declarations:[
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    FooterComponent,
    SidebarComponent,
    LightBoxDirective,
    CreditCardPipe,
    CartComponent,
    NaionalIDPipe,
    ProductDetailsComponent,
    MainLyoutComponent,
    NotFoundComponent,
    HomeComponent,
    NewProductComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSnackBar
   
  ],
  entryComponents:[ProductDetailsComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
