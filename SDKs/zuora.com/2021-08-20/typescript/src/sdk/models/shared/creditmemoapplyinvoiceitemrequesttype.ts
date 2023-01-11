import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreditMemoApplyInvoiceItemRequestType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=creditMemoItemId" })
  creditMemoItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=creditTaxItemId" })
  creditTaxItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=invoiceItemId" })
  invoiceItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=taxItemId" })
  taxItemId?: string;
}
