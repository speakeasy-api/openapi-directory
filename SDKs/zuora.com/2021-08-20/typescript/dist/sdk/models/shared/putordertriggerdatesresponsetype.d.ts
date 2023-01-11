import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutOrderTriggerDatesResponseTypeReasons extends SpeakeasyBase {
    code?: string;
    message?: string;
}
export declare enum PutOrderTriggerDatesResponseTypeStatusEnum {
    Completed = "Completed",
    Pending = "Pending"
}
export declare enum PutOrderTriggerDatesResponseTypeSubscriptionsStatusEnum {
    Active = "Active",
    PendingActivation = "Pending Activation",
    PendingAcceptance = "Pending Acceptance"
}
export declare class PutOrderTriggerDatesResponseTypeSubscriptions extends SpeakeasyBase {
    status?: PutOrderTriggerDatesResponseTypeSubscriptionsStatusEnum;
    subscriptionNumber?: string;
}
export declare class PutOrderTriggerDatesResponseType extends SpeakeasyBase {
    accountNumber?: string;
    orderNumber?: string;
    processId?: string;
    reasons?: PutOrderTriggerDatesResponseTypeReasons[];
    status?: PutOrderTriggerDatesResponseTypeStatusEnum;
    subscriptions?: PutOrderTriggerDatesResponseTypeSubscriptions[];
    success?: boolean;
}
