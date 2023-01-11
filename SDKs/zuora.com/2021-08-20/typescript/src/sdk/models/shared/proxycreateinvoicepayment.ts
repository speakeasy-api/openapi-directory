import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProxyCreateInvoicePayment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=InvoiceId" })
  invoiceId: string;

  @SpeakeasyMetadata({ data: "json, name=PaymentId" })
  paymentId: string;
}
