import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Invoice } from "./invoice";
import { ActionAmendInvoiceItem } from "./actionamendinvoiceitem";



export class ActionAmendInvoiceData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Invoice" })
  invoice?: Invoice;

  @SpeakeasyMetadata({ data: "json, name=InvoiceItem", elemType: ActionAmendInvoiceItem })
  invoiceItem?: ActionAmendInvoiceItem[];
}
