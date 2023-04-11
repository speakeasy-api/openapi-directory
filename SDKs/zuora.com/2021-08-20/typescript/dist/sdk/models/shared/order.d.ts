import { SpeakeasyBase } from "../../../internal/utils";
import { OrderAction } from "./orderaction";
import { OrderLineItemRetrieveOrder } from "./orderlineitemretrieveorder";
import { QuoteObjectFields } from "./quoteobjectfields";
/**
 * The status of the order. If the order contains any `Pending Activation` or `Pending Acceptance` subscription, the order status will be `Pending`; otherwise the order status is `Completed`.
 */
export declare enum OrderStatusEnum {
    Completed = "Completed",
    Pending = "Pending"
}
export declare class OrderSubscriptions extends SpeakeasyBase {
    /**
     * The base version of the subscription.
     */
    baseVersion?: number;
    /**
     * Container for custom fields of a Subscription object.
     *
     * @remarks
     *
     */
    customFields?: Record<string, any>;
    /**
     * The latest version of the subscription.
     */
    newVersion?: number;
    orderActions?: OrderAction[];
    /**
     * The fields populated for a quote when a quote is sent to Zuora Billing from Zuora Quote.
     *
     * @remarks
     *
     */
    quote?: QuoteObjectFields;
    /**
     * **Note**: This field is only available if you have the Ramps feature enabled. The [Orders](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/AA_Overview_of_Orders) feature must be enabled before you can access the [Ramps](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/A_Overview_of_Ramps_and_Ramp_Metrics) feature. The Ramps feature is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/C_Zuora_Editions) for pricing information coming October 2020.
     *
     * @remarks
     *
     * The ramp definition.
     *
     */
    ramp?: Record<string, any>;
    /**
     * The sequence number of a certain subscription processed by the order.
     */
    sequence?: number;
    /**
     * The new subscription number for a new subscription created, or the existing subscription number. Unlike the order request, the subscription number here always has a value.
     */
    subscriptionNumber?: string;
}
/**
 * Represents the order information that will be returned in the GET call.
 */
export declare class Order extends SpeakeasyBase {
    /**
     * The ID of the user who created this order.
     */
    createdBy?: string;
    /**
     * The time that the order gets created in the system, in the `YYYY-MM-DD HH:MM:SS` format.
     */
    createdDate?: string;
    /**
     * Currency code.
     */
    currency?: string;
    /**
     * Container for custom fields of an Order object.
     *
     * @remarks
     *
     */
    customFields?: Record<string, any>;
    /**
     * A description of the order.
     */
    description?: string;
    /**
     * The account number that this order has been created under. This is also the invoice owner of the subscriptions included in this order.
     */
    existingAccountNumber?: string;
    /**
     * The date when the order is signed. All the order actions under this order will use this order date as the contract effective date if no additinal contractEffectiveDate is provided.
     */
    orderDate?: Date;
    /**
     * [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AA_Overview_of_Order_Line_Items) are non subscription based items created by an Order, representing transactional charges such as one-time fees, physical goods, or professional service charges that are not sold as subscription services.
     *
     * @remarks
     *
     * With the Order Line Items feature enabled, you can now launch non-subscription and hybrid monetization business models in Zuora, in addition to subscription business models.
     *
     * **Note:** The [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AA_Overview_of_Order_Line_Items) feature is in the **Early Adopter** phase. We are actively soliciting feedback from a small set of early adopters before releasing it as generally available. If you want to join this early adopter program, submit a request at [Zuora Global Support](https://support.zuora.com/).
     *
     */
    orderLineItems?: OrderLineItemRetrieveOrder[];
    /**
     * The order number of the order.
     */
    orderNumber?: string;
    /**
     * The status of the order. If the order contains any `Pending Activation` or `Pending Acceptance` subscription, the order status will be `Pending`; otherwise the order status is `Completed`.
     */
    status?: OrderStatusEnum;
    /**
     * Represents a processed subscription, including the origin request (order actions) that create this version of subscription and the processing result (order metrics). The reference part in the request will be overridden with the info in the new subscription version.
     */
    subscriptions?: OrderSubscriptions[];
    /**
     * The ID of the user who updated this order.
     */
    updatedBy?: string;
    /**
     * The time that the order gets updated in the system(for example, an order description update), in the `YYYY-MM-DD HH:MM:SS` format.
     */
    updatedDate?: string;
}
