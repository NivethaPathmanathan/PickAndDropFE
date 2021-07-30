import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../Model/customer.model';
import { Observable } from "rxjs";
import { CustomerService } from '../Services/customer.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
})
export class EmployeeComponent implements OnInit {
  p: any;
  public searchText : string;
  private _allCus: Observable<Customer[]>;
  public get allCus(): Observable<Customer[]> {
    return this._allCus;
  }

  public set allCus(value: Observable<Customer[]>) {
    this._allCus = value;
  }
  customer: Customer[] = [];
  Status;
  constructor(
    private fb: FormBuilder,
    private customerservice : CustomerService) { }

    // loadDisplay(){
    //   //debugger;
    //   this.allCus = this.customerservice.getcustomer();
    // }

  ngOnInit() {
    this.customerservice.getcustomer().subscribe(data => {
      this.customer = data;
      // this.loadDisplay();
    })
  }


getcustomer(){
}

  deletecustomer(customer: Customer): void {
    this.customerservice.deletecustomer(customer.id)
      .subscribe(data => {
        this.customer = this.customer.filter(u => u !== customer);
      })
  };

  onChangeStatus(StatusId: number){
    if(StatusId){
      this.customerservice.getstatus(StatusId).subscribe(
        data => this.Status = data
      );
    }else{
      this.Status = null;
    }
  }
}
