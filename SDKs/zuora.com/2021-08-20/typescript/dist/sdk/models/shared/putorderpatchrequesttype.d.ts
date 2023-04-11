import { SpeakeasyBase } from "../../../internal/utils";
export declare class PUTOrderPatchRequestTypeSubscriptionsOrderActions extends SpeakeasyBase {
    /**
     * Container for custom fields of an Order Action object.
     *
     * @remarks
     *
     */
    customFields?: Record<string, any>;
    /**
     * The Id of the order action in the order. You can provide either the `sequence` or the `orderActionId` field to specify which order action to update. You cannot use then both at the same time.
     *
     * @remarks
     *
     */
    orderActionId?: string;
    /**
     * The sequence number of the order action in the order. You can provide either the `sequence` or the `orderActionId` field to specify which order action to update. You cannot use then both at the same time.
     *
     * @remarks
     *
     */
    sequence?: number;
}
export declare class PUTOrderPatchRequestTypeSubscriptions extends SpeakeasyBase {
    orderActions?: PUTOrderPatchRequestTypeSubscriptionsOrderActions[];
    subscriptionNumber?: string;
}
export declare class PUTOrderPatchRequestType extends SpeakeasyBase {
    /**
     * Container for custom fields of an Order object.
     *
     * @remarks
     *
     */
    customFields?: Record<string, any>;
    subscriptions?: PUTOrderPatchRequestTypeSubscriptions[];
}
