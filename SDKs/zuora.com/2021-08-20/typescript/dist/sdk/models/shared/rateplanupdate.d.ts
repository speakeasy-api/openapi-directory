import { SpeakeasyBase } from "../../../internal/utils";
import { ChargeUpdate } from "./chargeupdate";
/**
 * Information about an order action of type `UpdateProduct`.
 *
**/
export declare class RatePlanUpdate extends SpeakeasyBase {
    chargeUpdates?: ChargeUpdate[];
    customFields?: Record<string, any>;
    newRatePlanId?: string;
    ratePlanId?: string;
    specificUpdateDate?: Date;
    uniqueToken?: string;
}
