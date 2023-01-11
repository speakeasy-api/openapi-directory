import { SpeakeasyBase } from "../../../internal/utils";
import { BillingUpdate } from "./billingupdate";
import { CreateOrderUpdateProductTriggerParams } from "./createorderupdateproducttriggerparams";
import { CreateOrderPricingUpdate } from "./createorderpricingupdate";
/**
 * The JSON object containing the information for a charge update in the 'UpdateProduct' type order action.
**/
export declare class CreateOrderChargeUpdate extends SpeakeasyBase {
    billing?: BillingUpdate;
    chargeNumber?: string;
    customFields?: Record<string, any>;
    description?: string;
    effectiveDate?: CreateOrderUpdateProductTriggerParams;
    pricing?: CreateOrderPricingUpdate;
    uniqueToken?: string;
}
