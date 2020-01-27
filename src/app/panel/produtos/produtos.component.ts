import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { Product } from '../../core/models/product.model';
import { takeWhile } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserProducts } from '../../core/models/user-products.model';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {
  constructor(private _productService: ProductsService, private fb: FormBuilder) { }

  private take = true;
  productData: Product;
  userProducts: UserProducts[];
  productForm: FormGroup;
  productColumns: string[] = ['code', 'name', 'price', 'cashback', 'cashbackValue', 'status', 'delete'];

  ngOnInit() {
    this.productForm = this.fb.group({
      code: this.fb.control('', [Validators.required])
    })

    this.getUserProducts();
  }

  getProduct() {
    let code = this.productForm.get('code').value
    this._productService.getProduct(code)
      .pipe(takeWhile(() => this.take))
      .subscribe(res => {
        this.productData = res
      })
  }

  getUserProducts() {
    this._productService.getUserProducts().subscribe(products => {
      if (products) {
        this.userProducts = products
      }
    })
  }

  addUserProduct(productId) {
    let product = { product: productId }
    this._productService.addUserProducts(product).subscribe(product => {
      this.getUserProducts();
      this.productData = undefined
    })
  }

  deleteUserProducts(id) {
    this._productService.deleteUserProducts(id).subscribe(
      res => {
        this.getUserProducts();
      }
    );
  }

  ngOnDestroy() {
    this.take = false
  }

}
