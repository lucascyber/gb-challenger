import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { UserProducts } from '../models/user-products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http?: HttpClient) {
    
  }

  api = {
    products: `${environment.api}/products`,
    userProducts: `${environment.api}/user/products`
  };

  getProduct(code): Observable<Product> {
    return this._http.get<Product>(`${this.api.products}/${code}`);
  }

  getUserProducts(): Observable<UserProducts[]> {
    return this._http.get<UserProducts[]>(this.api.userProducts);
  }

  addUserProducts(userProduct): Observable<any> {
    return this._http.post(this.api.userProducts, userProduct);
  }

  deleteUserProducts(code): Observable<any> {
    return this._http.delete(`${this.api.userProducts}/${code}`);
  }
}
