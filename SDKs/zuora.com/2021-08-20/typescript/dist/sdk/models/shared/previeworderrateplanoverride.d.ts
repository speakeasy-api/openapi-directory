import { SpeakeasyBase } from "../../../internal/utils";
import { PreviewOrderChargeOverride } from "./previeworderchargeoverride";
/**
 * Rate plan associated with a subscription.
 *
**/
export declare class PreviewOrderRatePlanOverride extends SpeakeasyBase {
    chargeOverrides?: PreviewOrderChargeOverride[];
    customFields?: Record<string, any>;
    productRatePlanId: string;
    uniqueToken?: string;
}
