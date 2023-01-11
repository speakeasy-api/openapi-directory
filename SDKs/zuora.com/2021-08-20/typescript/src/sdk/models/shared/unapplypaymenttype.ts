import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PaymentDebitMemoApplicationUnapplyRequestType } from "./paymentdebitmemoapplicationunapplyrequesttype";
import { PaymentInvoiceApplicationUnapplyRequestType } from "./paymentinvoiceapplicationunapplyrequesttype";



export class UnapplyPaymentType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=debitMemos", elemType: PaymentDebitMemoApplicationUnapplyRequestType })
  debitMemos?: PaymentDebitMemoApplicationUnapplyRequestType[];

  @SpeakeasyMetadata({ data: "json, name=effectiveDate" })
  effectiveDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=invoices", elemType: PaymentInvoiceApplicationUnapplyRequestType })
  invoices?: PaymentInvoiceApplicationUnapplyRequestType[];
}
