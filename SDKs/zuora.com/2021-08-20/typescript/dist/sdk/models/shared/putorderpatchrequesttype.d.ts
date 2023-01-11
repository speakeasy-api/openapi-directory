import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutOrderPatchRequestTypeSubscriptionsOrderActions extends SpeakeasyBase {
    customFields?: Record<string, any>;
    orderActionId?: string;
    sequence?: number;
}
export declare class PutOrderPatchRequestTypeSubscriptions extends SpeakeasyBase {
    orderActions?: PutOrderPatchRequestTypeSubscriptionsOrderActions[];
    subscriptionNumber?: string;
}
export declare class PutOrderPatchRequestType extends SpeakeasyBase {
    customFields?: Record<string, any>;
    subscriptions?: PutOrderPatchRequestTypeSubscriptions[];
}
