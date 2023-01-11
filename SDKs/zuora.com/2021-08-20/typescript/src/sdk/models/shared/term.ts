import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Term
/** 
 * List of terms for the subscription.
 * 
**/
export class Term extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=isEvergreen" })
  isEvergreen?: boolean;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=termNumber" })
  termNumber?: number;
}
