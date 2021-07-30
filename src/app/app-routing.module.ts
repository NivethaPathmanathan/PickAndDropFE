import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ComplaintComponent } from './complaint/complaint.component';
import { EmployeeComponent } from './employee/employee.component';

const routes:Routes=[
  {path: 'complaint',component:ComplaintComponent},
  {path: 'employee', component:EmployeeComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule {
 }
