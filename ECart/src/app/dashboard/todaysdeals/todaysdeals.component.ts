import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todaysdeals',
  templateUrl: './todaysdeals.component.html',
  styleUrls: ['./todaysdeals.component.css']
})
export class TodaysdealsComponent implements OnInit {

  todaysdeals: {productName: string, oldPrice: string, offerPrice: string, productImage: string}[];
  currentDeal: {productName: string, oldPrice: string, offerPrice: string, productImage: string};

  constructor() {
    this.todaysdeals = [
      {
        productName: 'Product Test 1',
        oldPrice: '3000',
        offerPrice: '2500',
        productImage: 'https://via.placeholder.com/300x300.png?text=dealselectionimage1'
      },
      {
        productName: 'Product Test 2',
        oldPrice: '3000',
        offerPrice: '2500',
        productImage: 'https://via.placeholder.com/300x300.png?text=dealselectionimage2'
      },
      {
        productName: 'Product Test 3',
        oldPrice: '3000',
        offerPrice: '2500',
        productImage: 'https://via.placeholder.com/300x300.png?text=dealselectionimage3'
      },
      {
        productName: 'Product Test 4',
        oldPrice: '3000',
        offerPrice: '2500',
        productImage: 'https://via.placeholder.com/300x300.png?text=dealselectionimage4'
      },
      {
        productName: 'Product Test 5',
        oldPrice: '3000',
        offerPrice: '2500',
        productImage: 'https://via.placeholder.com/300x300.png?text=dealselectionimage5'
      },
      {
        productName: 'Product Test 6',
        oldPrice: '3000',
        offerPrice: '2500',
        productImage: 'https://via.placeholder.com/300x300.png?text=dealselectionimage6'
      }
    ]
    this.currentDeal = this.todaysdeals[0];
  }

  ngOnInit(): void {
  }

  onClick(productname) { 
    console.log(productname);
    
    for(let todaysdeal of this.todaysdeals){
      if(todaysdeal.productName === productname) {
        this.currentDeal = todaysdeal;
        this.updateSelectedItemCss(productname);
        break;
      }
    }
  }

  updateSelectedItemCss(productName)
  {
    let element = document.getElementById(productName);
    console.log(element);
  }

}
