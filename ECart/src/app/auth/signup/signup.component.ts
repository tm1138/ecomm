import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  datepicked: object;

  registerUserForm: FormGroup;
  submitted = false;
  registerFailed = false;
  registerErrorMessage = '';
  registered = false;
  form_errors = {
    'username': '',
    'first_name': '',
    'last_name': '',
    'email_id': '',
    'mob_number': '',
    'password': '',
    'dateofbirth': ''
  }

  validation_messages = {
    'username': {
      'required': 'user name is required.',
      'minlength': 'user name must have more than 3 characters.',
      'maxlength': 'user name must be less than 15 characters.'
    },
    'first_name': {
      'required': 'first name is required.',
      'minlength': 'first name must have more than 4 characters.',
      'maxlength': 'first name should be less than 15 characters.'
    },
    'last_name': {
      'required': 'last name is required.',
      'minlength': 'last name must have more than 4 characters.',
      'maxlength': 'first name should be less than 15 characters.'
    },
    'email_id': {
      'required': 'email id is required.',
      'email': 'email id wrong format.'
    },
    'mob_number': {
      'required': 'mobile number is required.',
      'pattern': 'mobile number should be 10 digit numeric value.'
    },
    'password': {
      'required': 'password is required.',
      'minlength': 'password should be atleast 6 charaters long.',
      'pattern': 'password should contain one uppercase, one lowercase and one numeric, should not contain special character.'
    },
    'dateofbirth': {
      'required': 'date of birth is mandatory'
    }
  }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.registerUserForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      first_name: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]),
      last_name: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]),
      email_id: new FormControl('', [Validators.required, Validators.email]),
      mob_number: new FormControl('', [Validators.required, Validators.pattern("[0-9]{10}")]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]),
      dateofbirth: new FormControl('', [Validators.required])
    })

    this.registerUserForm.valueChanges.subscribe(() => {
      this.registerFailed = false;
      this.form_errors = {
        'username': '',
        'first_name': '',
        'last_name': '',
        'email_id': '',
        'mob_number': '',
        'password': '',
        'dateofbirth': ''
      }

      if (this.submitted)
        this.populateErrorMessage();
    })
  }

  populateErrorMessage() {
    Object.keys(this.form_errors).forEach(form_control => {
      if (this.registerUserForm.controls[form_control].status == 'INVALID') {
        Object.keys(this.registerUserForm.controls[form_control].errors).forEach(error_code => {
          this.form_errors[form_control] += ' ' + this.validation_messages[form_control][error_code];
        })
      }
    })
  }

  onSubmit() {
    this.submitted=true;
    if (this.registerUserForm.valid)
    {
      console.log(this.registerUserForm.value);
      this.authService.registerUser(this.registerUserForm.value)
        .subscribe(
          data => {
            // show registration success page
          },
          error => {
            this.registerFailed = true;
            this.registerErrorMessage = error.message;
            console.log(error);
          }
      );
    }
    else
    {
      this.populateErrorMessage();
    }

  }

}
