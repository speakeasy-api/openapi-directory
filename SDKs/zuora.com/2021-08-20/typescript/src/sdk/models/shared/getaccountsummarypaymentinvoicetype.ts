import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAccountSummaryPaymentInvoiceType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appliedPaymentAmount" })
  appliedPaymentAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=invoiceId" })
  invoiceId?: string;

  @SpeakeasyMetadata({ data: "json, name=invoiceNumber" })
  invoiceNumber?: string;
}
