import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OwnerTransfer
/** 
 * Information about an order action of type `OwnerTransfer`.
 * 
 * **Note:** The Owner Transfer feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
 * 
**/
export class OwnerTransfer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinationAccountNumber" })
  destinationAccountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=destinationInvoiceAccountNumber" })
  destinationInvoiceAccountNumber?: string;
}
