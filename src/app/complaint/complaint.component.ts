import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../Model/customer.model';
import { Observable } from "rxjs";
import { CustomerService } from '../Services/customer.service';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
})
export class ComplaintComponent implements OnInit {
  addForm: FormGroup;
  submitted :boolean;
  p: any;
  private _allCus: Observable<Customer[]>;
  public get allCus(): Observable<Customer[]> {
    return this._allCus;
  }

  public set allCus(value: Observable<Customer[]>) {
    this._allCus = value;
  }
  customer: Customer[] = [];
  constructor(
    private fb: FormBuilder,
    private customerservice : CustomerService) { }

    // loadDisplay(){
    //   //debugger;
    //   this.allCus = this.customerservice.getcustomer();
    // }

  ngOnInit():void {
    this.addForm = this.fb.group({
      name: ['', Validators.required],
      email:['', Validators.required],
      complaint:''
    })

    this.customerservice.updatecustomer(this.addForm.value)
     .subscribe(
       data => {
         this.addForm.reset();
       },
       error => {
         alert(error);
       });

    this.customerservice.getcustomer().subscribe(data => {
      this.customer = data;
      // this.loadDisplay();
    })
  }

getcustomer(){
}

  get f(){
    return this.addForm.controls
  }

  onSubmit(){
    this.submitted = true;

    if(this.addForm.invalid){
    return;
  }

  this.customerservice.createcustomer(this.addForm.value)
  .subscribe(data => {
    if(this.addForm.status){
      this.addForm.reset();
    }
  },
    error => {
      alert(error);
    });
  }

  deletecustomer(customer: Customer): void {
    this.customerservice.deletecustomer(customer.id)
      .subscribe(data => {
        this.customer = this.customer.filter(u => u !== customer);
      })
  };

  editcustomer(customer: Customer): void {
  //   this.router.navigate(['customer', customer.id]);
   };

}
