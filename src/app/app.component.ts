import { errorstatus } from './controller/common';
import { Component } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from './services/auth/login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'testing';

  constructor(
    private authservice: LoginService,
    private formBuilder: FormBuilder,
    public router: Router
  ) {}
  public eror = errorstatus;
  checkoutForm = this.formBuilder.group({
    username: '',
    password: '',
  });
  ngDoCheck() {
    console.log(this.eror);
  }

  Login() {
    this.authservice
      .login({
        username: this.checkoutForm.value.username as string,
        password: this.checkoutForm.value.password as string,
      })
      .subscribe(
        (a: any) => {
          console.log(a);
          alert('Logged in!');
          this.router.navigate(['/dashboard']);
        },
        (e: any) => {
          console.log(e.status);
          if (e.status === 401) {
            alert('invalid creds');
          }
        }
      );
  }
}
