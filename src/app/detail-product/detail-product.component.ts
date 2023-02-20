import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  id!:number;

  constructor(private root:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.root.snapshot.params['id'];
  }

}
