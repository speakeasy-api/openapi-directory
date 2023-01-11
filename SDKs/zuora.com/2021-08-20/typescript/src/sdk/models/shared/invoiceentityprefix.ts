import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InvoiceEntityPrefix
/** 
 * Container for the prefix and starting document number of invoices.
 * 
**/
export class InvoiceEntityPrefix extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=prefix" })
  prefix?: string;

  @SpeakeasyMetadata({ data: "json, name=startNumber" })
  startNumber?: number;
}
