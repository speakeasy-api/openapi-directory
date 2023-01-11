import { SpeakeasyBase } from "../../../internal/utils";
import { CreditMemoEntityPrefix } from "./creditmemoentityprefix";
import { DebitMemoEntityPrefix } from "./debitmemoentityprefix";
import { InvoiceEntityPrefix } from "./invoiceentityprefix";
import { PaymentEntityPrefix } from "./paymententityprefix";
import { RefundEntityPrefix } from "./refundentityprefix";
export declare class PostSequenceSetRequest extends SpeakeasyBase {
    creditMemo: CreditMemoEntityPrefix;
    debitMemo: DebitMemoEntityPrefix;
    invoice: InvoiceEntityPrefix;
    name: string;
    payment?: PaymentEntityPrefix;
    refund?: RefundEntityPrefix;
}
