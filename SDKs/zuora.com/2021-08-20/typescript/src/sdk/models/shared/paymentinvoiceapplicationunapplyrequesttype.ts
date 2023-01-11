import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PaymentInvoiceApplicationItemUnapplyRequestType } from "./paymentinvoiceapplicationitemunapplyrequesttype";



export class PaymentInvoiceApplicationUnapplyRequestType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=invoiceId" })
  invoiceId?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: PaymentInvoiceApplicationItemUnapplyRequestType })
  items?: PaymentInvoiceApplicationItemUnapplyRequestType[];
}
