import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthGuard} from './auth.guard';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import { CategoryComponent} from './category/category.component';
import { HalanxComponent} from './halanx/halanx.component';
import { StoreComponent} from './store/store.component';
import { PlotsComponent} from './plots/plots.component';


const routes: Routes = [
  {
    path: 'halanx',
    component: HalanxComponent
  }, 
  {
    path: '',
    redirectTo: 'halanx',
    pathMatch: 'full'
  },

  
  {
    path: 'login',
    component: LoginComponent
  },
  
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component:DashboardComponent,
    children: [
      {
        path:'category',
        component:CategoryComponent
      },
      {
        path: '',
        redirectTo: 'category',
        pathMatch: 'full'
      },
      {
        path:'store',
        component:StoreComponent
      },
      {
        path:'plot',
        component:PlotsComponent
      }
    ]
  },
  
  { 
    path: '**' , 
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
