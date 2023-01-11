import { SpeakeasyBase } from "../../../internal/utils";
import { PreviewOrderChargeUpdate } from "./previeworderchargeupdate";
/**
 * Information about an order action of type `UpdateProduct`.
 *
**/
export declare class PreviewOrderRatePlanUpdate extends SpeakeasyBase {
    chargeUpdates?: PreviewOrderChargeUpdate[];
    customFields?: Record<string, any>;
    ratePlanId?: string;
    specificUpdateDate?: Date;
    uniqueToken?: string;
}
