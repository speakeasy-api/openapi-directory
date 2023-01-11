import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BillingUpdate } from "./billingupdate";
import { TriggerParams } from "./triggerparams";
import { PricingUpdate } from "./pricingupdate";



// ChargeUpdate
/** 
 * The JSON object containing the information for a charge update in the 'UpdateProduct' type order action.
**/
export class ChargeUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billing" })
  billing?: BillingUpdate;

  @SpeakeasyMetadata({ data: "json, name=chargeNumber" })
  chargeNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=customFields" })
  customFields?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=effectiveDate" })
  effectiveDate?: TriggerParams;

  @SpeakeasyMetadata({ data: "json, name=pricing" })
  pricing?: PricingUpdate;

  @SpeakeasyMetadata({ data: "json, name=uniqueToken" })
  uniqueToken?: string;
}
