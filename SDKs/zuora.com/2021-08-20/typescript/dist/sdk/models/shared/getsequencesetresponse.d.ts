import { SpeakeasyBase } from "../../../internal/utils";
import { CreditMemoEntityPrefix } from "./creditmemoentityprefix";
import { DebitMemoEntityPrefix } from "./debitmemoentityprefix";
import { InvoiceEntityPrefix } from "./invoiceentityprefix";
import { PaymentEntityPrefix } from "./paymententityprefix";
import { RefundEntityPrefix } from "./refundentityprefix";
export declare class GetSequenceSetResponse extends SpeakeasyBase {
    creditMemo?: CreditMemoEntityPrefix;
    debitMemo?: DebitMemoEntityPrefix;
    id?: string;
    invoice?: InvoiceEntityPrefix;
    name?: string;
    payment?: PaymentEntityPrefix;
    refund?: RefundEntityPrefix;
}
