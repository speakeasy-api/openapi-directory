import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreditMemoApplyInvoiceItemRequestType } from "./creditmemoapplyinvoiceitemrequesttype";



export class CreditMemoApplyInvoiceRequestType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=invoiceId" })
  invoiceId: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: CreditMemoApplyInvoiceItemRequestType })
  items?: CreditMemoApplyInvoiceItemRequestType[];
}
