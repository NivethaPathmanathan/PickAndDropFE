import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Customer } from 'src/app/model/customer.model';
import { Status } from '../Model/status.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseurl: string = "http://localhost:3000/customer";
  apibaseurl: string = "http://localhost:3000/status";

  constructor(private http: HttpClient) { }
  getcustomer():Observable<Customer[]>{
    return this.http.get<Customer[]>(this.baseurl);
  }

  getcustomerById(id: number):Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseurl + '/' + id);
  }

  getstatus(StatusId: number):Observable<Status[]>{
    return this.http.get<Status[]>(this.apibaseurl + '/' + StatusId)
  }

  createcustomer(customer: Customer) {
    return this.http.post(this.baseurl, customer);
  }

  deletecustomer(id: number) {
    return this.http.delete(this.baseurl + '/' + id);
  }

  findByTitle(title){
    return this.http.get(this.baseurl + title);
  }

}
