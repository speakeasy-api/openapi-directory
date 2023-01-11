import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreditMemoResponseType } from "./creditmemoresponsetype";
import { InvoiceResponseType } from "./invoiceresponsetype";



export class GenerateBillingDocumentResponseType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creditMemos", elemType: CreditMemoResponseType })
  creditMemos?: CreditMemoResponseType[];

  @SpeakeasyMetadata({ data: "json, name=invoices", elemType: InvoiceResponseType })
  invoices?: InvoiceResponseType[];

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
