import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http?: HttpClient) {
    
  }

  api = {
    products: `${environment.api}/products`
  };

  getProduct(code): Observable<Product> {
    return this._http.get<Product>(`${this.api.products}/${code}`);
  }
}
