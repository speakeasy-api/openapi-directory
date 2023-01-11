import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChargeOverride } from "./chargeoverride";



// RatePlanOverride
/** 
 * Rate plan associated with a subscription.
 * 
**/
export class RatePlanOverride extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chargeOverrides", elemType: ChargeOverride })
  chargeOverrides?: ChargeOverride[];

  @SpeakeasyMetadata({ data: "json, name=customFields" })
  customFields?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=newRatePlanId" })
  newRatePlanId?: string;

  @SpeakeasyMetadata({ data: "json, name=productRatePlanId" })
  productRatePlanId: string;

  @SpeakeasyMetadata({ data: "json, name=uniqueToken" })
  uniqueToken?: string;
}
