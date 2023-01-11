import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class InvoiceProcessingOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InvoiceDate" })
  invoiceDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=InvoiceTargetDate" })
  invoiceTargetDate: Date;
}
