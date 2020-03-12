import { Product } from '../../models/product';
import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent implements OnInit {
  @Input() product: Product;
  @HostBinding('attr.class') class = 'ui small image';

  constructor() { }

  ngOnInit(): void {
  }

}
