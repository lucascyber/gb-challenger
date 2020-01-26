import { TestBed, inject } from '@angular/core/testing';

import { ProductsService } from './products.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from '../interceptors/auth.interceptor';
import { Product } from '../models/product.model';


//Teste para buscar os produtos
describe('Validar recebmento de produtos', () => {
  const product: Product = {
    _id: "5e2790a915949023f7ec8087",
    codigoProduto: 25458,
    produtoNome: "Floratta Blue Desodorante Colônia 75ml",
    produtoValor: 75.89,
    image: "https://boticario.vteximg.com.br/arquivos/ids/190060-500-500/Floratta_Blue_Des_Colonia_75_ml_25458_frontal.jpg?v=636414155995830000",
    produtoCashback: 0.04,
    valorCashback: 3,
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        ProductsService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true,
        }
      ]
    });
  });

  it('Deve retornar dados do tipo Product', inject([ProductsService], (service: ProductsService) => {
    service.getProduct(25458).subscribe(res => {
      expect(res).toEqual(product)
    })
  }));
});
