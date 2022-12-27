import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  products: any = []

  constructor(public http: HttpClient) { }

  getProductsData(){
    this.http.get('http://localhost:3000/products').subscribe(res => {
      console.log(res)
      this.products = res;
    })
  }


  ngOnInit(): void {
    this.getProductsData();
  }

}
