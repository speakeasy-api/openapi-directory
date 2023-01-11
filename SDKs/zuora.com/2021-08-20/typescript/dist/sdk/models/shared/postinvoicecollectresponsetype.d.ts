import { SpeakeasyBase } from "../../../internal/utils";
import { PostInvoiceCollectCreditMemosType } from "./postinvoicecollectcreditmemostype";
import { PostInvoiceCollectInvoicesType } from "./postinvoicecollectinvoicestype";
export declare class PostInvoiceCollectResponseType extends SpeakeasyBase {
    amountCollected?: string;
    creditMemos?: PostInvoiceCollectCreditMemosType[];
    invoices?: PostInvoiceCollectInvoicesType[];
    paymentId?: string;
    success?: boolean;
}
