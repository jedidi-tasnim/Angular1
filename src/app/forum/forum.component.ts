import { Component, OnInit } from '@angular/core';
import { Product } from '../core/model/product';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  product!:Product;

  constructor() { }

  ngOnInit(): void {
    this.product=new Product;
  }

}
