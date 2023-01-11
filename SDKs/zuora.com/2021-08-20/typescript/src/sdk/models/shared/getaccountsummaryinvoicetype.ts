import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAccountSummaryInvoiceType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance?: string;

  @SpeakeasyMetadata({ data: "json, name=dueDate" })
  dueDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=invoiceDate" })
  invoiceDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=invoiceNumber" })
  invoiceNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
