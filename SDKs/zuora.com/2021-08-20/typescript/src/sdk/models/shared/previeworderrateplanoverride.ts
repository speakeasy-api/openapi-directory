import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PreviewOrderChargeOverride } from "./previeworderchargeoverride";



// PreviewOrderRatePlanOverride
/** 
 * Rate plan associated with a subscription.
 * 
**/
export class PreviewOrderRatePlanOverride extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chargeOverrides", elemType: PreviewOrderChargeOverride })
  chargeOverrides?: PreviewOrderChargeOverride[];

  @SpeakeasyMetadata({ data: "json, name=customFields" })
  customFields?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=productRatePlanId" })
  productRatePlanId: string;

  @SpeakeasyMetadata({ data: "json, name=uniqueToken" })
  uniqueToken?: string;
}
