import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit,
  DoCheck
} from '@angular/core';
import { Product } from '../../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.components.html',
  styleUrls: ['./product.component.scss']
})


export class ProductComponent implements OnInit, DoCheck {
  @Input() product: Product;
  @Output() addedCart: EventEmitter<any> = new EventEmitter();

  constructor() {
    console.log('1.- constructor');
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('2.- onChange', changes);
  // }
  ngOnInit() {
    console.log('3.- onInit');
  }
  ngDoCheck() {
    console.log('4.- doCheck');
  }
  addCart() {
    this.addedCart.emit(this.product.id);
  }
}
