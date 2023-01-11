import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PostInvoiceCollectCreditMemosType } from "./postinvoicecollectcreditmemostype";
import { PostInvoiceCollectInvoicesType } from "./postinvoicecollectinvoicestype";



export class PostInvoiceCollectResponseType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amountCollected" })
  amountCollected?: string;

  @SpeakeasyMetadata({ data: "json, name=creditMemos", elemType: PostInvoiceCollectCreditMemosType })
  creditMemos?: PostInvoiceCollectCreditMemosType[];

  @SpeakeasyMetadata({ data: "json, name=invoices", elemType: PostInvoiceCollectInvoicesType })
  invoices?: PostInvoiceCollectInvoicesType[];

  @SpeakeasyMetadata({ data: "json, name=paymentId" })
  paymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
