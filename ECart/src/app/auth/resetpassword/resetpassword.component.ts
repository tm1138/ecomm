import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetPasswordComponent implements OnInit {

  resetpasswordform: FormGroup;
  form_errors = {
    'email_id': ''
  }
  submitted: boolean = false;

  validation_messages = {
    'email_id': {
      'required': 'email id is required.',
      'email': 'email id wrong format.'
    }
  }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.resetpasswordform = new FormGroup({
      email_id: new FormControl('', [Validators.required, Validators.email])
    })

    this.resetpasswordform.valueChanges.subscribe(()=> {
      this.form_errors = {
        'email_id': ''
      }

      if (this.submitted)
        this.populateErrorMessage();
    })
  }

  populateErrorMessage() {
    Object.keys(this.form_errors).forEach(form_control => {
      if (this.resetpasswordform.controls[form_control].status == 'INVALID') {
        Object.keys(this.resetpasswordform.controls[form_control].errors).forEach(error_code => {
          this.form_errors[form_control] += ' ' + this.validation_messages[form_control][error_code];
        })
      }
    })
  }

  onSubmit() {
    this.submitted = true;

    if (this.resetpasswordform.valid)
    {
      let resetSuccess = this.authService.resetPassword(this.resetpasswordform.value);
      if (resetSuccess) {
        this.router.navigate(['/']);
      }
    }
    else
    {
      this.populateErrorMessage();
    }
  }

}
