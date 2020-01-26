import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { Product } from '../../core/models/product.model';
import { takeWhile } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {
  constructor(private _productService: ProductsService, private fb: FormBuilder) { }
  
  productData: Product;
  private take = true;
  productForm: FormGroup;

  ngOnInit() {
    this.productForm = this.fb.group({
      code: this.fb.control('', [Validators.required])
    })
  }

  getProduct() {
    let code = this.productForm.get('code').value
    this._productService.getProduct(code)
      .pipe(takeWhile(()=> this.take))
      .subscribe(res => {
        this.productData = res
      })
  }

  getUserProducts() {}

  ngOnDestroy() {
    this.take = false
  }

}
