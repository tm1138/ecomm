import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topproducts',
  templateUrl: './topproducts.component.html',
  styleUrls: ['./topproducts.component.css']
})
export class TopproductsComponent implements OnInit {

  topproducts: {productName: string, oldPrice: string, offerPrice: string, productImage: string}[];

  constructor() {
    this.topproducts = [
      {
        productName: 'Top Product 1',
        oldPrice: '3000',
        offerPrice: '2500',
        productImage: 'https://via.placeholder.com/250x250.png?text=dealselectionimage1'
      },
      {
        productName: 'Top Product 2',
        oldPrice: '3000',
        offerPrice: '2500',
        productImage: 'https://via.placeholder.com/250x250.png?text=dealselectionimage2'
      },
      {
        productName: 'Top Product 3',
        oldPrice: '3000',
        offerPrice: '2500',
        productImage: 'https://via.placeholder.com/250x250.png?text=dealselectionimage3'
      },
      {
        productName: 'Top Product 4',
        oldPrice: '3000',
        offerPrice: '2500',
        productImage: 'https://via.placeholder.com/250x250.png?text=dealselectionimage4'
      },
      {
        productName: 'Top Product 5',
        oldPrice: '3000',
        offerPrice: '2500',
        productImage: 'https://via.placeholder.com/250x250.png?text=dealselectionimage5'
      }
    ]
  }

  ngOnInit(): void {
  }

}
