import { SpeakeasyBase } from "../../../internal/utils";
import { ChargeUpdateForEvergreen } from "./chargeupdateforevergreen";
/**
 * Information about an order action of type `UpdateProduct`.
 *
**/
export declare class RatePlanUpdateForEvergreen extends SpeakeasyBase {
    chargeUpdates?: ChargeUpdateForEvergreen[];
    customFields?: Record<string, any>;
    newRatePlanId?: string;
    ratePlanId?: string;
    specificUpdateDate?: Date;
    uniqueToken?: string;
}
