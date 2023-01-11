import { SpeakeasyBase } from "../../../internal/utils";
import { ChargeOverrideForEvergreen } from "./chargeoverrideforevergreen";
/**
 * Rate plan associated with a subscription.
 *
**/
export declare class RatePlanOverrideForEvergreen extends SpeakeasyBase {
    chargeOverrides?: ChargeOverrideForEvergreen[];
    customFields?: Record<string, any>;
    newRatePlanId?: string;
    productRatePlanId: string;
    uniqueToken?: string;
}
