import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProxyGetInvoiceSplitItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedById" })
  createdById?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=InvoiceDate" })
  invoiceDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=InvoiceId" })
  invoiceId?: string;

  @SpeakeasyMetadata({ data: "json, name=InvoiceSplitId" })
  invoiceSplitId?: string;

  @SpeakeasyMetadata({ data: "json, name=PaymentTerm" })
  paymentTerm?: string;

  @SpeakeasyMetadata({ data: "json, name=SplitPercentage" })
  splitPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=UpdatedById" })
  updatedById?: string;

  @SpeakeasyMetadata({ data: "json, name=UpdatedDate" })
  updatedDate?: Date;
}
