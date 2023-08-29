import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EarthCenterComponent } from './earth-center/earth-center.component';
import { MarsCenterComponent } from './mars-center/mars-center.component';
import { MessageComponent } from './message/message.component';

const routes: Routes = [
  // { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'earth-center', component: EarthCenterComponent },
  { path: 'mars-center', component: MarsCenterComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'api/earth-mars-comm/message', component: MessageComponent }, 
  { path: 'earth-center', redirectTo: 'mars-msg' },
  { path: 'mars-center', redirectTo: 'earth-msg' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
