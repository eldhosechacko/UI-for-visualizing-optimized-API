/*
----------------------------------------------------------------------
File: /src/app/app.component.ts
----------------------------------------------------------------------
*/
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService, PaginatedProducts } from './product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private productService = inject(ProductService);

  products: any[] = [];
  currentPage = 1;
  totalPages = 0;
  limit = 15; // Load more items per page for a better scroll feel
  isLoading = false;
  allProductsLoaded = false;

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    if (this.isLoading || this.allProductsLoaded) {
      return; // Exit if already loading or all data is loaded
    }

    this.isLoading = true;
    this.productService
      .getProducts(this.currentPage, this.limit)
      .subscribe((response: PaginatedProducts) => {
        // Append the new data to the existing list
        this.products = [...this.products, ...response.data];
        this.totalPages = response.totalPages;
        
        if (this.currentPage >= this.totalPages) {
          this.allProductsLoaded = true;
        }

        this.isLoading = false;
      });
  }

  onScroll(event: Event) {
    const target = event.target as HTMLElement;
    const threshold = 150; // The distance from the bottom to trigger the load

    // Check if the user has scrolled to the bottom of the container
    const isAtBottom = target.scrollHeight - target.scrollTop <= target.clientHeight + threshold;

    if (isAtBottom && !this.isLoading && !this.allProductsLoaded) {
      this.currentPage++; // Increment page number
      this.loadProducts();   // Load the next page of products
    }
  }
}