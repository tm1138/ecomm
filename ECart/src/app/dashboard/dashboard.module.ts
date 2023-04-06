import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'

import { CarouselModule } from 'ngx-bootstrap/carousel';

import { NavbarModule } from './../navbar/navbar.module';

import { DashboardComponent } from './dashboard.component';
import { OffercarouselComponent } from './offercarousel/offercarousel.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { HomepageoffersComponent } from './homepageoffers/homepageoffers.component';
import { FeaturedbrandoffersComponent } from './featuredbrandoffers/featuredbrandoffers.component';
import { TodaysdealsComponent } from './todaysdeals/todaysdeals.component';
import { TopproductsComponent } from './topproducts/topproducts.component';
import { OfferbandComponent } from './offerband/offerband.component';
import { BrandoffersComponent } from './brandoffers/brandoffers.component';

const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '', component: HomepageoffersComponent
      },
      {
        path: 'product/:productname', component: ProductpageComponent
      }
    ]
  }
]


@NgModule({
  declarations: [DashboardComponent, OffercarouselComponent, ProductpageComponent, HomepageoffersComponent, FeaturedbrandoffersComponent, TodaysdealsComponent, TopproductsComponent, OfferbandComponent, BrandoffersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes),
    NavbarModule,
    CarouselModule.forRoot()
  ]
})
export class DashboardModule { }
