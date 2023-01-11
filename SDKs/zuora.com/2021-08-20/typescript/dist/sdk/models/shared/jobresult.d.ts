import { SpeakeasyBase } from "../../../internal/utils";
export declare class JobResultOrderLineItems extends SpeakeasyBase {
    id?: string;
    itemNumber?: string;
}
export declare class JobResultRamps extends SpeakeasyBase {
    rampNumber?: string;
    subscriptionNumber?: string;
}
export declare class JobResultReasons extends SpeakeasyBase {
    code?: string;
    message?: string;
}
export declare enum JobResultStatusEnum {
    Completed = "Completed",
    Pending = "Pending"
}
export declare enum JobResultSubscriptionsStatusEnum {
    Active = "Active",
    PendingActivation = "Pending Activation",
    PendingAcceptance = "Pending Acceptance",
    Cancelled = "Cancelled"
}
export declare class JobResultSubscriptions extends SpeakeasyBase {
    status?: JobResultSubscriptionsStatusEnum;
    subscriptionNumber?: string;
}
/**
 * **Note:** The schema of the `result` nested field is the same as the response body schema of either the ["Create an order"](https://www.zuora.com/developer/api-reference/#operation/POST_Order) or the ["Preview an order"](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrder) operation, depending on the purpose of the job.
 *
 * The following schema for the nested `result` field is defined as the response body schema of "Create an order". See [Preview an Order](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrder) for the response body schema of "Preview an order".
 *
**/
export declare class JobResult extends SpeakeasyBase {
    accountId?: string;
    accountNumber?: string;
    creditMemoIds?: string[];
    creditMemoNumbers?: string[];
    invoiceId?: string;
    invoiceNumbers?: string[];
    orderId?: string;
    orderLineItems?: JobResultOrderLineItems[];
    orderNumber?: string;
    paidAmount?: string;
    paymentId?: string;
    paymentNumber?: string;
    processId?: string;
    ramps?: JobResultRamps[];
    reasons?: JobResultReasons[];
    status?: JobResultStatusEnum;
    subscriptionIds?: string[];
    subscriptionNumbers?: string[];
    subscriptions?: JobResultSubscriptions[];
    success?: boolean;
}
