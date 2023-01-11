import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PostBillingPreviewCreditMemoItem } from "./postbillingpreviewcreditmemoitem";
import { PostBillingPreviewInvoiceItem } from "./postbillingpreviewinvoiceitem";



export class BillingPreviewResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=creditMemoItems", elemType: PostBillingPreviewCreditMemoItem })
  creditMemoItems?: PostBillingPreviewCreditMemoItem[];

  @SpeakeasyMetadata({ data: "json, name=invoiceItems", elemType: PostBillingPreviewInvoiceItem })
  invoiceItems?: PostBillingPreviewInvoiceItem[];

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
