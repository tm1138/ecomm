import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean = false;

  form_errors = {
    username: '',
    password: ''
  }

  validation_messages = {
    'username': {
      'required': 'user name is required.',
    },
    'password': {
      'required': 'password is required.',
    }
  }
  loginFailed: boolean;
  loginFailedMessage: any;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
                        username: new FormControl("", Validators.required),
                        password: new FormControl("", Validators.required)
    });

    this.loginForm.valueChanges.subscribe(() => {
      this.form_errors = {
        username: '',
        password: ''
      }
      this.loginFailed= false;
      if (this.submitted && !this.loginForm.valid) {
        this.populateErrorMessage();
      }
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/']);
        },
        error => {
          this.loginFailed = true;
          this.loginFailedMessage = error.message;
          console.log(error);
        }
      );
    }
    else {
      this.populateErrorMessage();
    }
  }

  populateErrorMessage() {
    Object.keys(this.form_errors).forEach(form_control => {
      if (this.loginForm.controls[form_control].status == 'INVALID') {
        Object.keys(this.loginForm.controls[form_control].errors).forEach(error_code => {
          this.form_errors[form_control] += ' ' + this.validation_messages[form_control][error_code];
        })
      }
    })
  }

  onChanges() {
    
  }

}
