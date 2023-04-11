import { SpeakeasyBase } from "../../../internal/utils";
import { GETSubscriptionProductFeatureType } from "./getsubscriptionproductfeaturetype";
import { GETSubscriptionRatePlanChargesType } from "./getsubscriptionrateplanchargestype";
/**
 * Container for custom fields of a Rate Plan object.
 *
 * @remarks
 *
 */
export declare class GETSubscriptionRatePlanType extends SpeakeasyBase {
    /**
     * Rate plan ID.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * The last amendment on the rate plan.
     *
     * @remarks
     *
     * Possible Values:
     *
     * * `Add`
     * * `Update`
     * * `Remove`
     *
     */
    lastChangeType?: string;
    productId?: string;
    productName?: string;
    productRatePlanId?: string;
    /**
     * The unique SKU for the product.
     *
     * @remarks
     *
     */
    productSku?: string;
    /**
     * Container for one or more charges.
     *
     * @remarks
     *
     */
    ratePlanCharges?: GETSubscriptionRatePlanChargesType[];
    /**
     * Name of the rate plan.
     *
     * @remarks
     *
     */
    ratePlanName?: string;
    /**
     * Container for one or more features.
     *
     * @remarks
     *
     * Only available when the following settings are enabled:
     *
     * * The Entitlements feature in your tenant.
     *
     * * The Enable Feature Specification in Product and Subscriptions setting in Zuora Billing Settings
     */
    subscriptionProductFeatures?: GETSubscriptionProductFeatureType[];
}
