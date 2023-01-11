import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProxyGetInvoicePayment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=CreatedById" })
  createdById?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=InvoiceId" })
  invoiceId?: string;

  @SpeakeasyMetadata({ data: "json, name=PaymentId" })
  paymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=RefundAmount" })
  refundAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=UpdatedById" })
  updatedById?: string;

  @SpeakeasyMetadata({ data: "json, name=UpdatedDate" })
  updatedDate?: Date;
}
