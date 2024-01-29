import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import Users from '../../../../assets/User.json';
import Products from '../../../../assets/data.json';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, CommonModule, RouterModule, RouterLink],
  templateUrl: './show.component.html',
  styleUrl: './show.component.scss'
})
export class ShowComponent {

  User: any = '';
  role = '';
  id: any = '';
  type: any = '';
  Product: any = '';
  Image: any = [];

  constructor(private activeroutes: ActivatedRoute, private routes: Router){
    activeroutes.queryParamMap.subscribe((params) => {
      this.id = params.get('id') || '';
    });
  }

  sendParam(){
    this.routes.navigate(['type', this.id]);
  }

  ngOnInit(): void {

    if(!localStorage.getItem('loggedInUser')){
      this.routes.navigate(['']);
    }

    this.User = Users.User.find((user) => user.id ==+ this.id);

    if(this.User.Role === 'sale'){
      this.role = "ผู้ซื้อ"
    } else {
      this.role = "ผู้จัดการ"
    }

    this.type = this.activeroutes.snapshot.paramMap.get('type') || '';

    if(this.type == 'hot'){
      this.type = "ร้อน"
    } else if(this.type == 'cool'){
      this.type = "เย็น"
    } else if(this.type == 'smooty'){
      this.type = "ปั่น"
    }

    this.Product = Products.Coffee.filter((coffee) => coffee.TypeProduct.TypeName == this.type);
    console.log(this.Product);
  }

  logout() {
    localStorage.removeItem('loggedInUser');

    this.routes.navigate(['']);
  }
}
