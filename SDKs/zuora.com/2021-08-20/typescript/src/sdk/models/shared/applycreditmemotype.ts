import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreditMemoApplyDebitMemoRequestType } from "./creditmemoapplydebitmemorequesttype";
import { CreditMemoApplyInvoiceRequestType } from "./creditmemoapplyinvoicerequesttype";



export class ApplyCreditMemoType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=debitMemos", elemType: CreditMemoApplyDebitMemoRequestType })
  debitMemos?: CreditMemoApplyDebitMemoRequestType[];

  @SpeakeasyMetadata({ data: "json, name=effectiveDate" })
  effectiveDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=invoices", elemType: CreditMemoApplyInvoiceRequestType })
  invoices?: CreditMemoApplyInvoiceRequestType[];
}
