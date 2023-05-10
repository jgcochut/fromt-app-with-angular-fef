import { Component } from '@angular/core';
import { CustomerService } from './customer.service';
import { Customer } from './customer.model';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  constructor(
    private service: CustomerService
  ){}

  ngOnInit(): void{}

  customer: Customer = {
    idCustomer: '',
    firstNameCustomer: '',
    lastNameCustomer: '',
    birthdateCustomer: '',
    dateCreatedCustomer: '',
    monthlyIncomeCustomer: '',
    cpfCustomer: '',
    emailCustomer: '',
    passwordCustomer: '',
    statusCustomer: true
  }

  createCustomer(){
    this.service.postCustomer(this.customer).subscribe(response => {
      console.log(response);
      this.resetar();
    })
  }

  resetar() {
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
  };

}
