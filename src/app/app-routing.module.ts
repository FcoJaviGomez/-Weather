import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { HomeLoggedComponent } from './pages/home-logged/home-logged.component';
import { HomeLoginComponent } from './pages/home-login/home-login.component';

const routes: Routes = [
  {
    path: "",
    component: HomeLoginComponent,

  },
  { path: "home-logged", component: HomeLoggedComponent, canActivate: [AuthGuard] },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
