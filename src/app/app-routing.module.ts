import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'users/detail/:name', component: UserDetailComponent},
  { path: 'products', component: ProductsComponent },
  { path: 'products/detail/:id', component: ProductDetailComponent},
  { path: 'orders', component: OrdersComponent },
  { path: 'orders/detail/:id', component: OrderDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
