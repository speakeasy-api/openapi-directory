import { SpeakeasyBase } from "../../../internal/utils";
import { PaymentInvoiceApplicationItemUnapplyRequestType } from "./paymentinvoiceapplicationitemunapplyrequesttype";
export declare class PaymentInvoiceApplicationUnapplyRequestType extends SpeakeasyBase {
    amount: number;
    invoiceId?: string;
    items?: PaymentInvoiceApplicationItemUnapplyRequestType[];
}
