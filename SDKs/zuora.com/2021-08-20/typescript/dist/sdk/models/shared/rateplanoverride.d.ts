import { SpeakeasyBase } from "../../../internal/utils";
import { ChargeOverride } from "./chargeoverride";
/**
 * Rate plan associated with a subscription.
 *
 * @remarks
 *
 */
export declare class RatePlanOverride extends SpeakeasyBase {
    /**
     * List of charges associated with the rate plan.
     *
     * @remarks
     *
     */
    chargeOverrides?: ChargeOverride[];
    /**
     * Container for custom fields of a Rate Plan object.
     *
     * @remarks
     *
     */
    customFields?: Record<string, any>;
    /**
     * Internal identifier of the rate plan.
     *
     * @remarks
     *
     */
    newRatePlanId?: string;
    /**
     * Internal identifier of the product rate plan that the rate plan is based on.
     *
     * @remarks
     *
     */
    productRatePlanId: string;
    /**
     * Unique identifier for the rate plan. This identifier enables you to refer to the rate plan before the rate plan has an internal identifier in Zuora.
     *
     * @remarks
     *
     * For instance, suppose that you want to use a single order to add a product to a subscription and later update the same product. When you add the product, you can set a unique identifier for the rate plan. Then when you update the product, you can use the same unique identifier to specify which rate plan to modify.
     *
     */
    uniqueToken?: string;
}
