import { SpeakeasyBase } from "../../../internal/utils";
import { CreateOrderChargeUpdate } from "./createorderchargeupdate";
/**
 * Information about an order action of type `UpdateProduct`.
 *
**/
export declare class CreateOrderRatePlanUpdate extends SpeakeasyBase {
    chargeUpdates?: CreateOrderChargeUpdate[];
    customFields?: Record<string, any>;
    ratePlanId?: string;
    specificUpdateDate?: Date;
    uniqueToken?: string;
}
