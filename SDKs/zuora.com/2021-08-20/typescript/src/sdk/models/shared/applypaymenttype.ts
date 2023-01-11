import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PaymentDebitMemoApplicationApplyRequestType } from "./paymentdebitmemoapplicationapplyrequesttype";
import { PaymentInvoiceApplicationApplyRequestType } from "./paymentinvoiceapplicationapplyrequesttype";



export class ApplyPaymentType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=debitMemos", elemType: PaymentDebitMemoApplicationApplyRequestType })
  debitMemos?: PaymentDebitMemoApplicationApplyRequestType[];

  @SpeakeasyMetadata({ data: "json, name=effectiveDate" })
  effectiveDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=invoices", elemType: PaymentInvoiceApplicationApplyRequestType })
  invoices?: PaymentInvoiceApplicationApplyRequestType[];
}
