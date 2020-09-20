import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { SerachDeleteComponent } from './serach-delete/serach-delete.component';
import { DataTableComponent } from './data-table/data-table.component';
import { MatTableComponent } from './mat-table/mat-table.component';
import { UserEditComponent } from './user-edit/user-edit.component'
import { SidenavResponsiveComponent } from './sidenav-responsive/sidenav-responsive.component'
import {DashboardCompComponent} from './dashboard-comp/dashboard-comp.component'
const routes: Routes = [
  //{ path: "", redirectTo: "register", pathMatch: "full" },
  { path: "", component: MatTableComponent },
  { path: "register", component: RegistrationComponent },
  { path: "search", component: SerachDeleteComponent },
  { path: "mat-tab", component: MatTableComponent },
  { path: "dat-tab", component: DataTableComponent },
  { path: "user-edit/:id", component: UserEditComponent },
  { path: "index2", component: SidenavResponsiveComponent },
  {path:"dash",component:DashboardCompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
