import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreditMemoUnapplyDebitMemoRequestType } from "./creditmemounapplydebitmemorequesttype";
import { CreditMemoUnapplyInvoiceRequestType } from "./creditmemounapplyinvoicerequesttype";



export class UnapplyCreditMemoType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=debitMemos", elemType: CreditMemoUnapplyDebitMemoRequestType })
  debitMemos?: CreditMemoUnapplyDebitMemoRequestType[];

  @SpeakeasyMetadata({ data: "json, name=effectiveDate" })
  effectiveDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=invoices", elemType: CreditMemoUnapplyInvoiceRequestType })
  invoices?: CreditMemoUnapplyInvoiceRequestType[];
}
