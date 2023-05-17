import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../Model/customer.model';
import { DatePipe } from '@angular/common';
import { API_CONFIG } from '../Config/api_config';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url : string = API_CONFIG.urlApi;

  constructor(
    private http: HttpClient,
    private datePipe: DatePipe   
  ) { }

  save(customer: Customer) : Observable<Customer[]>{
    customer.birthdateCustomer = this.datePipe.transform(customer.birthdateCustomer, 'dd/MM/yyyy');
    return this.http.post<Customer[]>(this.url+'/customer/insert', customer);
  }

  list(customer: Customer) : Observable<Customer[]>{
    customer.birthdateCustomer = this.datePipe.transform(customer.birthdateCustomer, 'dd/MM/yyyy');
    return this.http.post<Customer[]>(this.url+'/customer/insert', customer);
  }

}
