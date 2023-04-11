import { SpeakeasyBase } from "../../../internal/utils";
import { BillingUpdate } from "./billingupdate";
import { PreviewOrderPricingUpdate } from "./previeworderpricingupdate";
import { PreviewOrderTriggerParams } from "./previewordertriggerparams";
export declare class PreviewOrderChargeUpdate extends SpeakeasyBase {
    billing?: BillingUpdate;
    /**
     * Read only. Identifies the charge to be updated.
     *
     * @remarks
     *
     */
    chargeNumber?: string;
    /**
     * Container for custom fields of a Rate Plan Charge object.
     *
     * @remarks
     *
     */
    customFields?: Record<string, any>;
    description?: string;
    /**
     * Specifies when a charge becomes active.
     *
     * @remarks
     *
     */
    effectiveDate?: PreviewOrderTriggerParams;
    pricing?: PreviewOrderPricingUpdate;
    /**
     * A unique string to represent the rate plan charge in the order. The unique token is used to perform multiple actions against a newly added rate plan. For example, if you want to add and update a product in the same order, you would assign a unique token to the product rate plan when added and use that token in future order actions.
     *
     * @remarks
     *
     */
    uniqueToken?: string;
}
