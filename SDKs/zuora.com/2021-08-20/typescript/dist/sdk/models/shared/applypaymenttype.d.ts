import { SpeakeasyBase } from "../../../internal/utils";
import { PaymentDebitMemoApplicationApplyRequestType } from "./paymentdebitmemoapplicationapplyrequesttype";
import { PaymentInvoiceApplicationApplyRequestType } from "./paymentinvoiceapplicationapplyrequesttype";
export declare class ApplyPaymentType extends SpeakeasyBase {
    debitMemos?: PaymentDebitMemoApplicationApplyRequestType[];
    effectiveDate?: Date;
    invoices?: PaymentInvoiceApplicationApplyRequestType[];
}
