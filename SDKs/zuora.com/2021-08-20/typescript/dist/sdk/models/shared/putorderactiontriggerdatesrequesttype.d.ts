import { SpeakeasyBase } from "../../../internal/utils";
export declare class PUTOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsCharges extends SpeakeasyBase {
    /**
     * Charge number of the charge which needs the triggering date to be provided. The charge's `triggerEvent` must have been set as `SpecificDate`.
     */
    chargeNumber?: string;
    /**
     * Date in YYYY-MM-DD format. The specific trigger date you are to set for the charge.
     */
    specificTriggerDate?: Date;
}
/**
 * Name of the trigger date of the order action.
 */
export declare enum PUTOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsTriggerDatesNameEnum {
    ServiceActivation = "ServiceActivation",
    CustomerAcceptance = "CustomerAcceptance"
}
export declare class PUTOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsTriggerDates extends SpeakeasyBase {
    /**
     * Name of the trigger date of the order action.
     */
    name?: PUTOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsTriggerDatesNameEnum;
    /**
     * Trigger date in YYYY-MM-DD format. The date you are to set as the service activation date or the customer acceptance date.
     *
     * @remarks
     *
     */
    triggerDate?: Date;
}
export declare class PUTOrderActionTriggerDatesRequestTypeSubscriptionsOrderActions extends SpeakeasyBase {
    charges?: PUTOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsCharges[];
    /**
     * Identifies which order action will have its triggering dates updated.
     *
     * @remarks
     *
     */
    sequence: number;
    /**
     * Container for the service activation and customer acceptance dates of the order action.
     */
    triggerDates?: PUTOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsTriggerDates[];
}
export declare class PUTOrderActionTriggerDatesRequestTypeSubscriptions extends SpeakeasyBase {
    orderActions?: PUTOrderActionTriggerDatesRequestTypeSubscriptionsOrderActions[];
    /**
     * Subscription number of a subscription in the `Pending` order for which you are to update the triggering dates. For example, A-S00000001.
     *
     * @remarks
     *
     */
    subscriptionNumber: string;
}
export declare class PUTOrderActionTriggerDatesRequestType extends SpeakeasyBase {
    subscriptions?: PUTOrderActionTriggerDatesRequestTypeSubscriptions[];
}
