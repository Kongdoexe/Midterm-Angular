import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import DataUser from '../../../assets/User.json';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-type',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, CommonModule, RouterModule, RouterLink],
  templateUrl: './type.component.html',
  styleUrl: './type.component.scss'
})
export class TypeComponent {

  id = '';
  User : any = '';
  role = '';
  list = ["hot", "cool", "smooty"]

  constructor(private activerouter: ActivatedRoute, private routes: Router){}

  ngOnInit(): void {

    if(!localStorage.getItem('loggedInUser')){
      this.routes.navigate(['']);
    }

    this.id = this.activerouter.snapshot.paramMap.get('id') || '';
    this.User = DataUser.User.find((user) => user.id ==+ this.id);

    if(this.User.Role === 'sale'){
      this.role = "ผู้ซื้อ"
    } else {
      this.role = "ผู้จัดการ"
    }
  }

  sendParam(number: number){
    this.routes.navigate(['list', this.list[number]], {
      queryParams: { id : this.User.id },
    });
  }

  logout() {
    localStorage.removeItem('loggedInUser');

    this.routes.navigate(['']);
  }
}
