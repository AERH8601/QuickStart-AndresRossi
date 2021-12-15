import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../products';

export class ProductAlertsComponent implements OnInit {

  @Input() product!: Product;
  constructor() { }

  ngOnInit() {
  }

}

<p *ngIf="product && product.price > 700">
  <button>Notify Me</button>
</p>


