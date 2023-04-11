import { SpeakeasyBase } from "../../../internal/utils";
export declare class JobResultOrderLineItems extends SpeakeasyBase {
    /**
     * The sytem generated Id for the Order Line Item.
     */
    id?: string;
    /**
     * The number for the Order Line Item.
     */
    itemNumber?: string;
}
export declare class JobResultRamps extends SpeakeasyBase {
    /**
     * The number of the ramp definition.
     */
    rampNumber?: string;
    /**
     * The number of the subscription that this ramp deal definition is applied to.
     */
    subscriptionNumber?: string;
}
export declare class JobResultReasons extends SpeakeasyBase {
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
export declare enum JobResultStatusEnum {
    Completed = "Completed",
    Pending = "Pending"
}
/**
 * Status of the subscription. `Pending Activation` and `Pending Acceptance` are only applicable for an order that contains a `CreateSubscription` order action.
 */
export declare enum JobResultSubscriptionsStatusEnum {
    Active = "Active",
    PendingActivation = "Pending Activation",
    PendingAcceptance = "Pending Acceptance",
    Cancelled = "Cancelled"
}
export declare class JobResultSubscriptions extends SpeakeasyBase {
    /**
     * Status of the subscription. `Pending Activation` and `Pending Acceptance` are only applicable for an order that contains a `CreateSubscription` order action.
     */
    status?: JobResultSubscriptionsStatusEnum;
    /**
     * Subscription number of the subscription included in this order.
     */
    subscriptionNumber?: string;
}
/**
 * **Note:** The schema of the `result` nested field is the same as the response body schema of either the ["Create an order"](https://www.zuora.com/developer/api-reference/#operation/POST_Order) or the ["Preview an order"](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrder) operation, depending on the purpose of the job.
 *
 * @remarks
 *
 * The following schema for the nested `result` field is defined as the response body schema of "Create an order". See [Preview an Order](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrder) for the response body schema of "Preview an order".
 *
 */
export declare class JobResult extends SpeakeasyBase {
    /**
     * The account ID for the order. This field is returned only when the `returnIds` query parameter in the "Create an order asynchronously" operation is set to `true`.
     */
    accountId?: string;
    /**
     * The account number for the order.
     */
    accountNumber?: string;
    /**
     * An array of the credit memo IDs that are generated in the "Create an order asynchronously" operation. This field is returned only when the `returnIds` query parameter in the "Create an order asynchronously" operation is set to `true`.
     */
    creditMemoIds?: string[];
    /**
     * An array of the credit memo numbers generated in this order request. The credit memo is only available if you have the Invoice Settlement feature enabled.
     */
    creditMemoNumbers?: string[];
    /**
     * An array of the invoice IDs that are generated in the "Create an order asynchronously" operation. This field is returned only when the `returnIds` query parameter in the "Create an order asynchronously" operation is set to `true`.
     */
    invoiceId?: string;
    /**
     * An array of the invoice numbers generated in this order request. Normally it includes one invoice number only, but can include multiple items when a subscription was tagged as invoice separately.
     */
    invoiceNumbers?: string[];
    /**
     * The ID of the order created. This field is returned only when the `returnIds` query parameter in the "Create an order asynchronously" operation is set to `true`.
     */
    orderId?: string;
    orderLineItems?: JobResultOrderLineItems[];
    /**
     * The order number of the order created.
     */
    orderNumber?: string;
    /**
     * The total amount collected in this order request.
     */
    paidAmount?: string;
    /**
     * The ID of the payment that is collected in the "Create an order asynchronously" operation. This field is returned only when the `returnIds` query parameter in the "Create an order asynchronously" operation is set to `true`.
     */
    paymentId?: string;
    /**
     * The payment number that collected in this order request.
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
    ramps?: JobResultRamps[];
    reasons?: JobResultReasons[];
    /**
     * Status of the order. `Pending` is only applicable for an order that contains a `CreateSubscription` order action.
     */
    status?: JobResultStatusEnum;
    /**
     * Container for the IDs of the subscriptions in the order. This field is returned only when the `returnIds` query parameter in the "Create an order asynchronously" operation is set to `true`.
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
    subscriptions?: JobResultSubscriptions[];
    /**
     * Indicates whether the call succeeded.
     *
     * @remarks
     *
     */
    success?: boolean;
}
