import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChargeUpdateForEvergreen } from "./chargeupdateforevergreen";



// RatePlanUpdateForEvergreen
/** 
 * Information about an order action of type `UpdateProduct`.
 * 
**/
export class RatePlanUpdateForEvergreen extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chargeUpdates", elemType: ChargeUpdateForEvergreen })
  chargeUpdates?: ChargeUpdateForEvergreen[];

  @SpeakeasyMetadata({ data: "json, name=customFields" })
  customFields?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=newRatePlanId" })
  newRatePlanId?: string;

  @SpeakeasyMetadata({ data: "json, name=ratePlanId" })
  ratePlanId?: string;

  @SpeakeasyMetadata({ data: "json, name=specificUpdateDate" })
  specificUpdateDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=uniqueToken" })
  uniqueToken?: string;
}
