import { SpeakeasyBase } from "../../../internal/utils";
import { CreditMemoUnapplyDebitMemoRequestType } from "./creditmemounapplydebitmemorequesttype";
import { CreditMemoUnapplyInvoiceRequestType } from "./creditmemounapplyinvoicerequesttype";
export declare class UnapplyCreditMemoType extends SpeakeasyBase {
    debitMemos?: CreditMemoUnapplyDebitMemoRequestType[];
    effectiveDate?: Date;
    invoices?: CreditMemoUnapplyInvoiceRequestType[];
}
