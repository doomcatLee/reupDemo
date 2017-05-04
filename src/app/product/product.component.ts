
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})


export class ProductComponent {

  constructor(private router: Router){}

  products: Product[] =[
    new Product(1,"OG Kush", "35%", 11),
    new Product(2,"Lemon Kush", "18%", 1),
    new Product(3,"GreenPussy", "29%", 13),
    new Product(4,"NiggerLee", "82%", 110)
  ];

  goToDetailPage(clickedProduct: Product){
    this.router.navigate(['products', clickedProduct.id]);
  };
}
