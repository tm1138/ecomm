import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrandofferModule } from './brandoffer/brandoffer.module';


const routes: Routes = [
  {
    path: '',
    loadChildren : () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },

  {
    path: 'brandoffer/:offer',
    loadChildren: () => import('./brandoffer/brandoffer.module').then(m =>BrandofferModule)
  },

  {
    path: 'user',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
