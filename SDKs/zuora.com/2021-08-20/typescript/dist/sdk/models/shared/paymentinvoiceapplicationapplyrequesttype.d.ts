import { SpeakeasyBase } from "../../../internal/utils";
import { PaymentInvoiceApplicationItemApplyRequestType } from "./paymentinvoiceapplicationitemapplyrequesttype";
export declare class PaymentInvoiceApplicationApplyRequestType extends SpeakeasyBase {
    amount: number;
    invoiceId?: string;
    items?: PaymentInvoiceApplicationItemApplyRequestType[];
}
