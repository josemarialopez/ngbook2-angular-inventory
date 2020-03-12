import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductRowComponent } from './components/product-row/product-row.component';
import { ProductImageComponent } from './components/product-image/product-image.component';
import { ProductDepartmentComponent } from './components/product-department/product-department.component';
import { ProductPriceComponent } from './components/product-price/product-price.component';


@NgModule({
  declarations: [
  ProductListComponent,
  ProductRowComponent,
  ProductImageComponent,
  ProductDepartmentComponent,
  ProductPriceComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  exports: [
  ProductListComponent,
  ProductRowComponent,
  ProductImageComponent,
  ProductDepartmentComponent,
  ProductPriceComponent]

})
export class ProductModule { }
