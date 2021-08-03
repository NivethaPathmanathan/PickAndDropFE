import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Customer } from '../model/customer.model';
import { CustomerService } from '../services/customer.service';
import { StatusService } from '../services/status.service';

@Component({
  selector: 'app-viewComplaint',
  templateUrl: './viewComplaint.component.html',
})
export class viewComplaintComponent implements OnInit {
  p: any; // it's for pagination
  public searchText : string;
  statusId;
  complaints: Customer[] = [];
  statuses = [];

  constructor(private customerservice : CustomerService,
    private statusservice : StatusService,
    private toastr : ToastrService
    ) {
  }

  ngOnInit() {
    this.customerservice.getcomplaint().subscribe(data => {
      this.complaints = data;
    });

    this.statusservice.getstatus().subscribe(data => {
      this.statuses = data;
    });

   // this.statuses = [ {id: 0, "name" : 'NORMAL'}, {id: 1, "name" : 'PENDING'}, {id: 2, "name" : 'RESOLVED'}, {id: 3, "name" : 'MOVE TO HIGHER LEVEL'}]
  }

  getcomplaint(){
}

  deletecustomer(customer: Customer): void {
    this.customerservice.deletecustomer(customer.id)
      .subscribe(data => {
        this.complaints = this.complaints.filter(u => u !== customer);
      })
  };

  onChangeStatus(event){
    this.statusId = event.target.value;
    }

  updateStatus(CustomerId){
 //   let obj = {statusID: this.StatusId, Id : CustomerId}
    this.customerservice.updatestatus(this.statusId).subscribe(
      data => {
        this.toastr.success('Successfully updated!!');
      });
  }
}
