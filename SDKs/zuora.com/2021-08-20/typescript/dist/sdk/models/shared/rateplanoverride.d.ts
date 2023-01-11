import { SpeakeasyBase } from "../../../internal/utils";
import { ChargeOverride } from "./chargeoverride";
/**
 * Rate plan associated with a subscription.
 *
**/
export declare class RatePlanOverride extends SpeakeasyBase {
    chargeOverrides?: ChargeOverride[];
    customFields?: Record<string, any>;
    newRatePlanId?: string;
    productRatePlanId: string;
    uniqueToken?: string;
}
