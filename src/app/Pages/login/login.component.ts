import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {
  Route,
  Router,
  RouterModule,
  RouterOutlet,
  Routes,
} from '@angular/router';
import User from '../../../assets/User.json';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  Users = User;

  email: any = [];
  pass = '';
  id: any = '';
  loggedInUser: any = '';

  constructor(private router: Router) {}

  ngOnInit() {
    const loggedInUser = localStorage.getItem('loggedInUser');

    if (loggedInUser) {
      this.router.navigate(['type', loggedInUser]);
    }
  }

  Check(emaila: HTMLInputElement, passa: HTMLInputElement) {
    this.email = this.Users.User.filter(
      (user) => emaila.value == user.email && user.password == +passa.value
    );

    if (this.email.length > 0) {
      this.id = this.email[0].id;

      localStorage.setItem('loggedInUser', this.id);

      this.router.navigate(['type', this.id]);
    }
  }
}
