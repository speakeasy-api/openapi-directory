import { SpeakeasyBase } from "../../../internal/utils";
import { ChargeUpdate } from "./chargeupdate";
/**
 * Information about an order action of type `UpdateProduct`.
 *
 * @remarks
 *
 */
export declare class RatePlanUpdate extends SpeakeasyBase {
    chargeUpdates?: ChargeUpdate[];
    /**
     * Container for custom fields of a Rate Plan object.
     *
     * @remarks
     *
     */
    customFields?: Record<string, any>;
    /**
     * Internal identifier of the updated rate plan in the new subscription version.
     *
     * @remarks
     *
     */
    newRatePlanId?: string;
    /**
     * Internal identifier of the rate plan that was updated.
     *
     * @remarks
     *
     */
    ratePlanId?: string;
    /**
     *
     * @remarks
     * The date when the Update Product order action takes effect. This field is only applicable if there is already a future-dated Update Product order action on the subscription. The format of the date is yyyy-mm-dd.
     *
     * See [Update a Product on Subscription with Future-dated Updates](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AC_Orders_Tutorials/C_Update_a_Product_in_a_Subscription/Update_a_Product_on_Subscription_with_Future-dated_Updates) for more information about this feature.
     *
     */
    specificUpdateDate?: Date;
    /**
     * A unique string to represent the rate plan charge in the order. The unique token is used to perform multiple actions against a newly added rate plan. For example, if you want to add and update a product in the same order, you would assign a unique token to the product rate plan when added and use that token in future order actions.
     *
     * @remarks
     *
     */
    uniqueToken?: string;
}
