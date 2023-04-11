import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostOrderResponseTypeOrderLineItems extends SpeakeasyBase {
    /**
     * The sytem generated Id for the Order Line Item.
     */
    id?: string;
    /**
     * The number for the Order Line Item.
     */
    itemNumber?: string;
}
export declare class PostOrderResponseTypeRamps extends SpeakeasyBase {
    /**
     * The number of the ramp definition.
     */
    rampNumber?: string;
    /**
     * The number of the subscription that this ramp deal definition is applied to.
     */
    subscriptionNumber?: string;
}
export declare class PostOrderResponseTypeReasons extends SpeakeasyBase {
    /**
     * The error code of response.
     *
     * @remarks
     *
     */
    code?: string;
    /**
     * The detail information of the error response
     *
     * @remarks
     *
     */
    message?: string;
}
/**
 * Status of the order. `Pending` is only applicable for an order that contains a `CreateSubscription` order action.
 */
export declare enum PostOrderResponseTypeStatusEnum {
    Completed = "Completed",
    Pending = "Pending"
}
/**
 * Status of the subscription. `Pending Activation` and `Pending Acceptance` are only applicable for an order that contains a `CreateSubscription` order action.
 */
export declare enum PostOrderResponseTypeSubscriptionsStatusEnum {
    Active = "Active",
    PendingActivation = "Pending Activation",
    PendingAcceptance = "Pending Acceptance",
    Cancelled = "Cancelled",
    Suspended = "Suspended"
}
export declare class PostOrderResponseTypeSubscriptions extends SpeakeasyBase {
    /**
     * Status of the subscription. `Pending Activation` and `Pending Acceptance` are only applicable for an order that contains a `CreateSubscription` order action.
     */
    status?: PostOrderResponseTypeSubscriptionsStatusEnum;
    /**
     * Subscription ID of the subscription included in this order. This field is returned instead of the `subscriptionNumber` field if the `returnIds` query parameter is set to `true`.
     */
    subscriptionId?: string;
    /**
     * Subscription number of the subscription included in this order.
     */
    subscriptionNumber?: string;
}
export declare class PostOrderResponseType extends SpeakeasyBase {
    /**
     * The account ID for the order. This field is returned instead of the `accountNumber` field if the `returnIds` query parameter is set to `true`.
     */
    accountId?: string;
    /**
     * The account number for the order.
     */
    accountNumber?: string;
    /**
     * An array of the credit memo IDs generated in this order request. The credit memo is only available if you have the Invoice Settlement feature enabled. This field is returned instead of the `creditMemoNumbers` field if the `returnIds` query parameter is set to `true`.
     */
    creditMemoIds?: string[];
    /**
     * An array of the credit memo numbers generated in this order request. The credit memo is only available if you have the Invoice Settlement feature enabled.
     */
    creditMemoNumbers?: string[];
    /**
     * An array of the invoice IDs generated in this order request. Normally it includes one invoice ID only, but can include multiple items when a subscription was tagged as invoice separately. This field is returned instead of the `invoiceNumbers` field if the `returnIds` query parameter is set to `true`.
     */
    invoiceIds?: string[];
    /**
     * An array of the invoice numbers generated in this order request. Normally it includes one invoice number only, but can include multiple items when a subscription was tagged as invoice separately.
     */
    invoiceNumbers?: string[];
    /**
     * The ID of the order created. This field is returned instead of the `orderNumber` field if the `returnIds` query parameter is set to `true`.
     */
    orderId?: string;
    orderLineItems?: PostOrderResponseTypeOrderLineItems[];
    /**
     * The order number of the order created.
     */
    orderNumber?: string;
    /**
     * The total amount collected in this order request.
     */
    paidAmount?: string;
    /**
     * The payment Id that is collected in this order request. This field is returned instead of the `paymentNumber` field if the `returnIds` query parameter is set to `true`.
     */
    paymentId?: string;
    /**
     * The payment number that is collected in this order request.
     */
    paymentNumber?: string;
    /**
     * The Id of the process that handle the operation.
     *
     * @remarks
     *
     */
    processId?: string;
    /**
     * **Note**: This field is only available if you have the Ramps feature enabled. The [Orders](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/AA_Overview_of_Orders) feature must be enabled before you can access the [Ramps](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/A_Overview_of_Ramps_and_Ramp_Metrics) feature. The Ramps feature is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/C_Zuora_Editions) for pricing information coming October 2020.
     *
     * @remarks
     *
     * The ramp definitions created by this order request.
     *
     */
    ramps?: PostOrderResponseTypeRamps[];
    reasons?: PostOrderResponseTypeReasons[];
    /**
     * Status of the order. `Pending` is only applicable for an order that contains a `CreateSubscription` order action.
     */
    status?: PostOrderResponseTypeStatusEnum;
    /**
     * **Note:** This field is in Zuora REST API version control. Supported minor versions are 222.4 or earlier. To use this field in the method, you must set the `zuora-version` parameter to the minor version number in the request header.
     *
     * @remarks
     *
     * Container for the subscription IDs of the subscriptions in an order. This field is returned instead of the `subscriptionNumbers` field if the `returnIds` query parameter is set to `true`.
     *
     */
    subscriptionIds?: string[];
    /**
     * **Note:** This field is in Zuora REST API version control. Supported minor versions are 222.4 or earlier. To use this field in the method, you must set the `zuora-version` parameter to the minor version number in the request header.
     *
     * @remarks
     *
     * Container for the subscription numbers of the subscriptions in an order.
     *
     */
    subscriptionNumbers?: string[];
    /**
     * **Note:** This field is in Zuora REST API version control. Supported minor versions are 223.0 or later. To use this field in the method, you must set the `zuora-version` parameter to the minor version number in the request header.
     *
     * @remarks
     *
     * Container for the subscription numbers and statuses in an order.
     *
     */
    subscriptions?: PostOrderResponseTypeSubscriptions[];
    /**
     * Indicates whether the call succeeded.
     *
     * @remarks
     *
     */
    success?: boolean;
}
