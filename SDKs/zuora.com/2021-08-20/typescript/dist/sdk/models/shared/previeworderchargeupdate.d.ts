import { SpeakeasyBase } from "../../../internal/utils";
import { BillingUpdate } from "./billingupdate";
import { PreviewOrderTriggerParams } from "./previewordertriggerparams";
import { PreviewOrderPricingUpdate } from "./previeworderpricingupdate";
export declare class PreviewOrderChargeUpdate extends SpeakeasyBase {
    billing?: BillingUpdate;
    chargeNumber?: string;
    customFields?: Record<string, any>;
    description?: string;
    effectiveDate?: PreviewOrderTriggerParams;
    pricing?: PreviewOrderPricingUpdate;
    uniqueToken?: string;
}
