import { SpeakeasyBase } from "../../../internal/utils";
export declare class PUTOrderTriggerDatesResponseTypeReasons extends SpeakeasyBase {
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
 * Status of the order.
 */
export declare enum PUTOrderTriggerDatesResponseTypeStatusEnum {
    Completed = "Completed",
    Pending = "Pending"
}
/**
 * Status of the subscription. `Pending Activation` and `Pending Acceptance` are only applicable for an order that contains a `CreateSubscription` order action.
 */
export declare enum PUTOrderTriggerDatesResponseTypeSubscriptionsStatusEnum {
    Active = "Active",
    PendingActivation = "Pending Activation",
    PendingAcceptance = "Pending Acceptance"
}
export declare class PUTOrderTriggerDatesResponseTypeSubscriptions extends SpeakeasyBase {
    /**
     * Status of the subscription. `Pending Activation` and `Pending Acceptance` are only applicable for an order that contains a `CreateSubscription` order action.
     */
    status?: PUTOrderTriggerDatesResponseTypeSubscriptionsStatusEnum;
    /**
     * Subscription number of the subscription updated.
     */
    subscriptionNumber?: string;
}
export declare class PUTOrderTriggerDatesResponseType extends SpeakeasyBase {
    /**
     * The account number for the order.
     */
    accountNumber?: string;
    /**
     * The order number of the order updated.
     */
    orderNumber?: string;
    /**
     * The Id of the process that handle the operation.
     *
     * @remarks
     *
     */
    processId?: string;
    reasons?: PUTOrderTriggerDatesResponseTypeReasons[];
    /**
     * Status of the order.
     */
    status?: PUTOrderTriggerDatesResponseTypeStatusEnum;
    /**
     * The subscriptions updated.
     */
    subscriptions?: PUTOrderTriggerDatesResponseTypeSubscriptions[];
    /**
     * Indicates whether the call succeeded.
     *
     * @remarks
     *
     */
    success?: boolean;
}
