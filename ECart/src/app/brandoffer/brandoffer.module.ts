import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandofferComponent } from './brandoffer.component';
import { Routes, RouterModule} from '@angular/router';

const brandofferroutes: Routes = [
  {
    path: '',
    component: BrandofferComponent
  }
]

@NgModule({
  declarations: [BrandofferComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(brandofferroutes)
  ]
})
export class BrandofferModule { }
