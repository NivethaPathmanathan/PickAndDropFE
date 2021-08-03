import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { HttpClientModule } from '@angular/common/http';
import { viewComplaintComponent } from './viewComplaint/viewComplaint.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { headerComponent } from './header/header.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchPipe } from './pipe/search.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ToastrModule } from 'ngx-toastr';
// import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';
@NgModule({
  declarations: [
    AppComponent,
    ComplaintComponent,
    viewComplaintComponent,
    headerComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    // NgOptionHighlightModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    ToastrModule.forRoot({
      positionClass : 'toast-bottom-right'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
