import { SpeakeasyBase } from "../../../internal/utils";
import { CreditMemoApplyInvoiceItemRequestType } from "./creditmemoapplyinvoiceitemrequesttype";
export declare class CreditMemoApplyInvoiceRequestType extends SpeakeasyBase {
    amount: number;
    invoiceId: string;
    items?: CreditMemoApplyInvoiceItemRequestType[];
}
