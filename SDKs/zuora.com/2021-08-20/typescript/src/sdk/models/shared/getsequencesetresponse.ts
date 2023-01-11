import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreditMemoEntityPrefix } from "./creditmemoentityprefix";
import { DebitMemoEntityPrefix } from "./debitmemoentityprefix";
import { InvoiceEntityPrefix } from "./invoiceentityprefix";
import { PaymentEntityPrefix } from "./paymententityprefix";
import { RefundEntityPrefix } from "./refundentityprefix";



export class GetSequenceSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creditMemo" })
  creditMemo?: CreditMemoEntityPrefix;

  @SpeakeasyMetadata({ data: "json, name=debitMemo" })
  debitMemo?: DebitMemoEntityPrefix;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=invoice" })
  invoice?: InvoiceEntityPrefix;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=payment" })
  payment?: PaymentEntityPrefix;

  @SpeakeasyMetadata({ data: "json, name=refund" })
  refund?: RefundEntityPrefix;
}
