import { Injectable } from '@angular/core';
import { IPaymentRequest } from '../interfaces/payment.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private httpRequest: HttpClient) { }

  public startPayment(payload: IPaymentRequest): Observable<any> {
    return this.httpRequest.post('/api/payment', payload);
  }
}
