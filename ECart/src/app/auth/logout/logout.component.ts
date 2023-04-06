import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authServie: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authServie.isLoggedIn = false;
    this.authServie.logout();
    this.router.navigate(['/']);
  }

}
