import { SpeakeasyBase } from "../../../internal/utils";
import { BillingUpdate } from "./billingupdate";
import { TriggerParams } from "./triggerparams";
import { PricingUpdate } from "./pricingupdate";
/**
 * The JSON object containing the information for a charge update in the 'UpdateProduct' type order action.
**/
export declare class ChargeUpdate extends SpeakeasyBase {
    billing?: BillingUpdate;
    chargeNumber?: string;
    customFields?: Record<string, any>;
    description?: string;
    effectiveDate?: TriggerParams;
    pricing?: PricingUpdate;
    uniqueToken?: string;
}
