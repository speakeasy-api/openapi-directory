import { SpeakeasyBase } from "../../../internal/utils";
import { CreditMemoResponseType } from "./creditmemoresponsetype";
import { InvoiceResponseType } from "./invoiceresponsetype";
export declare class GenerateBillingDocumentResponseType extends SpeakeasyBase {
    creditMemos?: CreditMemoResponseType[];
    invoices?: InvoiceResponseType[];
    success?: boolean;
}
