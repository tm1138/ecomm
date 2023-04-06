import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { NavbarComponent } from './navbar.component';
import { LogoComponent } from './logo/logo.component';
import { SearchComponent } from './search/search.component';
import { UserdropdownComponent } from './userdropdown/userdropdown.component';
import { LogindropdownComponent } from './logindropdown/logindropdown.component';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [NavbarComponent, LogoComponent, SearchComponent, UserdropdownComponent, LogindropdownComponent],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    RouterModule,
    NgbTypeaheadModule,
    FormsModule
  ],
  exports: [NavbarComponent, LogoComponent]
})
export class NavbarModule { }
