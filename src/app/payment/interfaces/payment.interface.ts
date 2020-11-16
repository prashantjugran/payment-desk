export interface IPaymentRequest {
    creditCardNumber: string;
    cardholder: string;
    expirationDate: string;
    securityCode: string;
    amount: number;
}