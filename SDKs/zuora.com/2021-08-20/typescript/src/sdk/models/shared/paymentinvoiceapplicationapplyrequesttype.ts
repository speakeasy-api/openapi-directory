import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PaymentInvoiceApplicationItemApplyRequestType } from "./paymentinvoiceapplicationitemapplyrequesttype";



export class PaymentInvoiceApplicationApplyRequestType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=invoiceId" })
  invoiceId?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: PaymentInvoiceApplicationItemApplyRequestType })
  items?: PaymentInvoiceApplicationItemApplyRequestType[];
}
