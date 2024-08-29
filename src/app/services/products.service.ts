import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = 'assets/productsData.json';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<{ products: Product[] }> {
    return this.http.get<{ products: Product[] }>(this.apiUrl);
  }

  getProductById(id: number): Observable<Product | undefined> {
    return this.http.get<{ products: Product[] }>(this.apiUrl).pipe(
      map(data => data.products.find(product => product.id === id))
    );
  }
}