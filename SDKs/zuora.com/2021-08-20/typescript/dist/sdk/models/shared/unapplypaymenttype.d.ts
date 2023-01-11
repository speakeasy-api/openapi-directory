import { SpeakeasyBase } from "../../../internal/utils";
import { PaymentDebitMemoApplicationUnapplyRequestType } from "./paymentdebitmemoapplicationunapplyrequesttype";
import { PaymentInvoiceApplicationUnapplyRequestType } from "./paymentinvoiceapplicationunapplyrequesttype";
export declare class UnapplyPaymentType extends SpeakeasyBase {
    debitMemos?: PaymentDebitMemoApplicationUnapplyRequestType[];
    effectiveDate?: Date;
    invoices?: PaymentInvoiceApplicationUnapplyRequestType[];
}
