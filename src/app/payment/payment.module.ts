import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';
import { PaymentComponent } from './components/payment/payment.component';

const routes: Routes = [
  { 
    path: '', component:PaymentComponent
  },
  { 
    path: 'success', component:PaymentSuccessComponent
  }
];

@NgModule({
  declarations: [ PaymentComponent, PaymentSuccessComponent ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class PaymentModule { }
