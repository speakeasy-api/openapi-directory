import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PaymentEntityPrefix
/** 
 * Container for the prefix and starting number of payments.
 * 
**/
export class PaymentEntityPrefix extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=prefix" })
  prefix?: string;

  @SpeakeasyMetadata({ data: "json, name=startNumber" })
  startNumber?: number;
}
