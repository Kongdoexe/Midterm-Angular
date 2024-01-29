import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-navbarbg',
  standalone: true,
  imports: [MatToolbarModule, CommonModule],
  templateUrl: './navbarbg.component.html',
  styleUrl: './navbarbg.component.scss'
})
export class NavbarbgComponent {

}
