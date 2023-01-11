import { SpeakeasyBase } from "../../../internal/utils";
import { CreditMemoApplyDebitMemoRequestType } from "./creditmemoapplydebitmemorequesttype";
import { CreditMemoApplyInvoiceRequestType } from "./creditmemoapplyinvoicerequesttype";
export declare class ApplyCreditMemoType extends SpeakeasyBase {
    debitMemos?: CreditMemoApplyDebitMemoRequestType[];
    effectiveDate?: Date;
    invoices?: CreditMemoApplyInvoiceRequestType[];
}
