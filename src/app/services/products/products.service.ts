import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url: string = 'https://dummyjson.com/products/search'

  constructor() { }

  searchProduct(searchTerm: string) {
    
  }
}
