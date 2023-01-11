import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ActionSubscribeInvoiceData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Invoice" })
  invoice?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=InvoiceItem" })
  invoiceItem?: Record<string, any>[];
}
