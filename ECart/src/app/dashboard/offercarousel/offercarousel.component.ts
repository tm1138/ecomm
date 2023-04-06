import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offercarousel',
  templateUrl: './offercarousel.component.html',
  styleUrls: ['./offercarousel.component.css']
})
export class OffercarouselComponent implements OnInit {

  carouselOffers: { productName: string, oldPrice: string, offerPrice: string, productImage: string }[];

  constructor() {
    this.carouselOffers = [
      {
        productName: 'product1',
        oldPrice: '3000',
        offerPrice: '2500',
        productImage: 'https://via.placeholder.com/1920x550.png?text=dealselectionimage1'
      },
      {
        productName: 'product2',
        oldPrice: '3000',
        offerPrice: '2500',
        productImage: 'https://via.placeholder.com/1920x550.png?text=dealselectionimage2'
      },
      {
        productName: 'product3',
        oldPrice: '3000',
        offerPrice: '2500',
        productImage: 'https://via.placeholder.com/1920x550.png?text=dealselectionimage3'
      },
      {
        productName: 'product4',
        oldPrice: '3000',
        offerPrice: '2500',
        productImage: 'https://via.placeholder.com/1920x550.png?text=dealselectionimage4'
      }
    ]
  }

  ngOnInit(): void {
  }

}
