import { SpeakeasyBase } from "../../../internal/utils";
import { PostBillingPreviewCreditMemoItem } from "./postbillingpreviewcreditmemoitem";
import { PostBillingPreviewInvoiceItem } from "./postbillingpreviewinvoiceitem";
export declare class BillingPreviewResult extends SpeakeasyBase {
    accountId?: string;
    creditMemoItems?: PostBillingPreviewCreditMemoItem[];
    invoiceItems?: PostBillingPreviewInvoiceItem[];
    success?: boolean;
}
