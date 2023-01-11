import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostOrderResponseTypeOrderLineItems extends SpeakeasyBase {
    id?: string;
    itemNumber?: string;
}
export declare class PostOrderResponseTypeRamps extends SpeakeasyBase {
    rampNumber?: string;
    subscriptionNumber?: string;
}
export declare class PostOrderResponseTypeReasons extends SpeakeasyBase {
    code?: string;
    message?: string;
}
export declare enum PostOrderResponseTypeStatusEnum {
    Completed = "Completed",
    Pending = "Pending"
}
export declare enum PostOrderResponseTypeSubscriptionsStatusEnum {
    Active = "Active",
    PendingActivation = "Pending Activation",
    PendingAcceptance = "Pending Acceptance",
    Cancelled = "Cancelled",
    Suspended = "Suspended"
}
export declare class PostOrderResponseTypeSubscriptions extends SpeakeasyBase {
    status?: PostOrderResponseTypeSubscriptionsStatusEnum;
    subscriptionId?: string;
    subscriptionNumber?: string;
}
export declare class PostOrderResponseType extends SpeakeasyBase {
    accountId?: string;
    accountNumber?: string;
    creditMemoIds?: string[];
    creditMemoNumbers?: string[];
    invoiceIds?: string[];
    invoiceNumbers?: string[];
    orderId?: string;
    orderLineItems?: PostOrderResponseTypeOrderLineItems[];
    orderNumber?: string;
    paidAmount?: string;
    paymentId?: string;
    paymentNumber?: string;
    processId?: string;
    ramps?: PostOrderResponseTypeRamps[];
    reasons?: PostOrderResponseTypeReasons[];
    status?: PostOrderResponseTypeStatusEnum;
    subscriptionIds?: string[];
    subscriptionNumbers?: string[];
    subscriptions?: PostOrderResponseTypeSubscriptions[];
    success?: boolean;
}
