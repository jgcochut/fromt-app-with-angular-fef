import { Component } from '@angular/core';
import { CustomerService } from '../Service/customer.service';
import { Customer } from '../Model/customer.model';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  success : boolean = false;
  errors! : String [];

  constructor(
    private service: CustomerService
  ){}

  ngOnInit(): void{
    //this.saveCustomer();
  }

  /*customer: Customer = {
    idCustomer: '',
    firstNameCustomer: 'Joao',
    lastNameCustomer: 'Alguem',
    birthdateCustomer: '20/04/1990',
    dateCreatedCustomer: '',
    monthlyIncomeCustomer: '1000',
    cpfCustomer: '43756225550',
    emailCustomer: 'ja@gmail.com',
    passwordCustomer: '1234',
    statusCustomer: true
  }*/

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

  saveCustomer() {
    const datePipe = new DatePipe('en-US');
    this.customer.birthdateCustomer = datePipe.transform(
      this.customer.birthdateCustomer, 'dd/MM/yyyy');
    
    this.service.save(this.customer).subscribe({next: response => {
      this.success = true;
      this.errors = [];    
    }, error: ex => {
      if (ex.error.errors) {
        this.errors = ex.error.errors;
        this.success = false;
        ex.error.errors.forEach((element:any) => {         
        });
      } else {
          this.success = false;
          this.errors = ex.error.errors;        
      }
    }})
  }
  
  /*saveCustomer(){
    this.service.save(this.customer).subscribe(response => {
      console.log(response);
      this.resetar();
    })
  }

  resetar() {
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
  };*/

}
