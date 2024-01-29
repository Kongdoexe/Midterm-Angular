import { Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { TypeComponent } from './Pages/type/type.component';
import { ShowComponent } from './Pages/menu/show/show.component';

export const routes: Routes = [
  {path: '',component: LoginComponent},
  {path: 'type/:id',component: TypeComponent},
  {path: 'list/:type',component: ShowComponent}
];
