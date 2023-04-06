import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featuredbrandoffers',
  templateUrl: './featuredbrandoffers.component.html',
  styleUrls: ['./featuredbrandoffers.component.css']
})
export class FeaturedbrandoffersComponent implements OnInit {

  featuredbrandtext: string = '';
  brandOffers: {
                  brandofferdetail: string, 
                  offerimagesource: string, 
                  offerimagetext: string, 
                  brandlogo: string,
                  brandofferlink: string
  }[];

  constructor() { 
    this.featuredbrandtext = 'Game To The End With ADATA';

    this.brandOffers = [
      {
        brandofferdetail: 'offer1',
        offerimagesource: 'https://via.placeholder.com/210x210.png?text=offer1',
        offerimagetext: 'offer1',
        brandlogo: 'https://via.placeholder.com/210x50.png?text=brandlogo',
        brandofferlink: 'brandoffer/offer1'
      },
      {
        brandofferdetail: 'offer2',
        offerimagesource: 'https://via.placeholder.com/210x210.png?text=offer2',
        offerimagetext: 'offer2',
        brandlogo: 'https://via.placeholder.com/210x50.png?text=brandlogo',
        brandofferlink: 'brandoffer/offer2'
      },
      {
        brandofferdetail: 'offer3',
        offerimagesource: 'https://via.placeholder.com/210x210.png?text=offer3',
        offerimagetext: 'offer3',
        brandlogo: 'https://via.placeholder.com/210x50.png?text=brandlogo',
        brandofferlink: 'brandoffer/offer3'
      },
      {
        brandofferdetail: 'offer4',
        offerimagesource: 'https://via.placeholder.com/210x210.png?text=offer4',
        offerimagetext: 'offer4',
        brandlogo: 'https://via.placeholder.com/210x50.png?text=brandlogo',
        brandofferlink: 'brandoffer/offer5'
      },
      {
        brandofferdetail: 'offer5',
        offerimagesource: 'https://via.placeholder.com/210x210.png?text=offer5',
        offerimagetext: 'offer5',
        brandlogo: 'https://via.placeholder.com/210x50.png?text=brandlogo',
        brandofferlink: 'brandoffer/offer6'
      }
    ]
  }

  ngOnInit(): void {
  }

}
