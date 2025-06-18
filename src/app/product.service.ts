/*
----------------------------------------------------------------------
File: /src/app/product.service.ts
----------------------------------------------------------------------
*/
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

export interface PaginatedProducts {
  data: any[];
  total: number;
  page: number;
  totalPages: number;
}

@Injectable({ providedIn: 'root' })
export class ProductService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/products/paginated`;

  getProducts(page: number, limit: number): Observable<PaginatedProducts> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());
    return this.http.get<PaginatedProducts>(this.apiUrl, { params });
  }
}