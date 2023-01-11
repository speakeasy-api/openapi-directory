import { SpeakeasyBase } from "../../../internal/utils";
import { CreditMemoUnapplyInvoiceItemRequestType } from "./creditmemounapplyinvoiceitemrequesttype";
export declare class CreditMemoUnapplyInvoiceRequestType extends SpeakeasyBase {
    amount: number;
    invoiceId: string;
    items?: CreditMemoUnapplyInvoiceItemRequestType[];
}
