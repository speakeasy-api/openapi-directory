import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PaymentInvoiceApplicationItemApplyRequestType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=invoiceItemId" })
  invoiceItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=taxItemId" })
  taxItemId?: string;
}
