import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer.model';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl = 'http://localhost:8080/api/fef/v1/customer';

  constructor(
    private http: HttpClient,
    private datePipe: DatePipe   
  ) { }

  postCustomer(customer: Customer) : Observable<Customer[]>{
    customer.birthdateCustomer = this.datePipe.transform(customer.birthdateCustomer, 'dd/MM/yyyy');
    return this.http.post<Customer[]>(this.apiUrl+'/insert', customer);
  }


}
