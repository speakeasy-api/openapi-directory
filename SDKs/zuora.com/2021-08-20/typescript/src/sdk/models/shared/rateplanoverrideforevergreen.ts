import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChargeOverrideForEvergreen } from "./chargeoverrideforevergreen";



// RatePlanOverrideForEvergreen
/** 
 * Rate plan associated with a subscription.
 * 
**/
export class RatePlanOverrideForEvergreen extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chargeOverrides", elemType: ChargeOverrideForEvergreen })
  chargeOverrides?: ChargeOverrideForEvergreen[];

  @SpeakeasyMetadata({ data: "json, name=customFields" })
  customFields?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=newRatePlanId" })
  newRatePlanId?: string;

  @SpeakeasyMetadata({ data: "json, name=productRatePlanId" })
  productRatePlanId: string;

  @SpeakeasyMetadata({ data: "json, name=uniqueToken" })
  uniqueToken?: string;
}
