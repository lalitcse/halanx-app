import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavComponent } from './topnav/topnav.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {UserService} from './user.service';
import {AuthGuard} from './auth.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CategoryComponent } from './category/category.component';
import { HalanxComponent } from './halanx/halanx.component';
import { StoreComponent } from './store/store.component';
import { PlotsComponent } from './plots/plots.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    LoginComponent,
    FooterComponent,
    DashboardComponent,
    PagenotfoundComponent,
    CategoryComponent,
    HalanxComponent,
    StoreComponent,
    PlotsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    UserService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
