import { IProduct } from './models/product';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {IPagination} from './models/pagination'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Cheers Liquor';
  
  products: IProduct[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://fakestoreapi.com/products/').subscribe((response: IPagination) => {
      this.products = response.data;
      console.log(this.products);
    }, error => {
      console.log(error);
    });
  }
  
}

