import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './Component/products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './Component/cart/cart.component';
 import { MainLyoutComponent } from './Component/main-lyout/main-lyout.component';
 import { NotFoundComponent } from './Component/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { NewProductComponent } from './Component/new-product/new-product.component';

const routes: Routes = [
  {path: '', component:MainLyoutComponent, children: [
    {path:'', redirectTo:'/Home', pathMatch:'full'},
    {path:'Home', component:HomeComponent},
    {path:'Product',component:ProductsComponent},
    {path:'Products/:pid', component:ProductDetailsComponent},
    {path:'Order', component:CartComponent},
    {path:'NewProduct', component:NewProductComponent},
    {path:'EditProduct/:pid', component:NewProductComponent}
] },

{path:'**', component:NotFoundComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
