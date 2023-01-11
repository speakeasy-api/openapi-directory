import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutBatchInvoiceType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=invoices" })
  invoices?: Record<string, any>[];
}
