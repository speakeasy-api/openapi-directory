import { SpeakeasyBase } from "../../../internal/utils";
import { CreateOrderChargeOverride } from "./createorderchargeoverride";
/**
 * Information about an order action of type `addProduct`.
 *
 * @remarks
 *
 * If you want to create a pending order through the "Add product" order action, and if the charge's trigger condition is `Specific Date`, you must set a charge number in the `chargeNumber` field for the "Add product" order action. In this case, if you do not set it, Zuora will not generate the charge number for you.
 *
 * See more information about pending orders in [Pending Order and Subscription](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/Pending_Order_and_Subscription).
 *
 */
export declare class CreateOrderRatePlanOverride extends SpeakeasyBase {
    /**
     * List of charges associated with the rate plan.
     *
     * @remarks
     *
     */
    chargeOverrides?: CreateOrderChargeOverride[];
    /**
     * Container for custom fields of a Rate Plan object.
     *
     * @remarks
     *
     */
    customFields?: Record<string, any>;
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
