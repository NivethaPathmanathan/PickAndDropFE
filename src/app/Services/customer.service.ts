import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Customer } from 'src/app/model/customer.model';
import { Status } from '../model/status.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  // baseurl: string = "http://localhost:3000/customer";
  // apibaseurl: string = "http://localhost:3000/status";

  constructor(private http: HttpClient) { }
  getcomplaint():Observable<Customer[]>{
    return this.http.get<Customer[]>(environment.baseurl);
  }

  getcustomerById(id: number):Observable<Customer[]> {
    return this.http.get<Customer[]>(environment.baseurl+ '/' + id);
  }

  createcustomer(customer: Customer) {
    return this.http.post(environment.baseurl, customer);
  }

  deletecustomer(id: number) {
    return this.http.delete(environment.baseurl + '/' + id);
  }

  updatestatus(customer:Customer) {
    return this.http.put(environment.baseurl + '/' + customer.Id, customer);
  }

  findByTitle(title){
    return this.http.get(environment.baseurl + title);
  }

}
