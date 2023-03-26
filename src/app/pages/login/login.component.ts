import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/auth/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  title = 'testing';
  constructor(
    private authservice: LoginService,
    private formBuilder: FormBuilder,
    public router: Router
  ) {}
  checkoutForm = this.formBuilder.group({
    username: '',
    password: '',
  });

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
          const token = a.headers.get('X-Auth-Token');
          // this.router.navigate(['viewCart']);
          sessionStorage.setItem('token', token);
          localStorage.setItem('token', token);
          // this.coockie.set('name', token);
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
