import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ComplaintComponent } from './complaint/complaint.component';
import { viewComplaintComponent } from './viewComplaint/viewComplaint.component';
import { headerComponent } from './header/header.component';

const routes:Routes=[
  {path: '', component:headerComponent},
  {path: 'complaint',component:ComplaintComponent},
  {path: 'viewComplaint', component:viewComplaintComponent}
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
