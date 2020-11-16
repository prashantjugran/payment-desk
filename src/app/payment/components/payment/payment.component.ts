import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../services/payment.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { IPaymentRequest } from '../../interfaces/payment.interface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  public paymentFormGroup: FormGroup;
  public todayDate: string;
  constructor(private paymentService: PaymentService, private fb: FormBuilder, private router: Router) { }

  public ngOnInit(): void {
    this.todayDate  = new Date().toISOString().split('T')[0];
    this.paymentFormGroup = this.fb.group({
      creditCardNumber: ['', [Validators.required]],
      cardholder: ['', [Validators.required]],
      expirationDate: ['', [Validators.required]],
      securityCode: ['', []],
      amount: ['',[Validators.required]]
    });
  }

  public createPayment(): void {
    const payload: IPaymentRequest = this.paymentFormGroup.getRawValue();
    this.paymentService.startPayment(payload).pipe().subscribe(res => {
      this.router.navigate(['payment/success']);
    });
  }

}
