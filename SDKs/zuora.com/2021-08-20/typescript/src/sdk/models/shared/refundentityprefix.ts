import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RefundEntityPrefix
/** 
 * Container for the prefix and starting number of refunds.
 * 
**/
export class RefundEntityPrefix extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=prefix" })
  prefix?: string;

  @SpeakeasyMetadata({ data: "json, name=startNumber" })
  startNumber?: number;
}
