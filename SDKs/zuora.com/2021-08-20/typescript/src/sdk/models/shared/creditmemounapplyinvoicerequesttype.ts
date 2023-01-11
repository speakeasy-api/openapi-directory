import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreditMemoUnapplyInvoiceItemRequestType } from "./creditmemounapplyinvoiceitemrequesttype";



export class CreditMemoUnapplyInvoiceRequestType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=invoiceId" })
  invoiceId: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: CreditMemoUnapplyInvoiceItemRequestType })
  items?: CreditMemoUnapplyInvoiceItemRequestType[];
}
