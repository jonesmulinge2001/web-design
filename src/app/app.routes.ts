import { Routes } from '@angular/router';
import { HomepageComponent } from './component/homepage/homepage.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
export const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomepageComponent },
    { path: 'home', component: HomepageComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent }
];
