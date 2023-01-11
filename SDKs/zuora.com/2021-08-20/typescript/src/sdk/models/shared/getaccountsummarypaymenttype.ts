import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GetAccountSummaryPaymentInvoiceType } from "./getaccountsummarypaymentinvoicetype";



export class GetAccountSummaryPaymentType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=effectiveDate" })
  effectiveDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=paidInvoices", elemType: GetAccountSummaryPaymentInvoiceType })
  paidInvoices?: GetAccountSummaryPaymentInvoiceType[];

  @SpeakeasyMetadata({ data: "json, name=paymentNumber" })
  paymentNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentType" })
  paymentType?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
