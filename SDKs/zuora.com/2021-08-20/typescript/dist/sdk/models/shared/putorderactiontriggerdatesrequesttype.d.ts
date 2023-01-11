import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsCharges extends SpeakeasyBase {
    chargeNumber?: string;
    specificTriggerDate?: Date;
}
export declare enum PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsTriggerDatesNameEnum {
    ServiceActivation = "ServiceActivation",
    CustomerAcceptance = "CustomerAcceptance"
}
export declare class PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsTriggerDates extends SpeakeasyBase {
    name?: PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsTriggerDatesNameEnum;
    triggerDate?: Date;
}
export declare class PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActions extends SpeakeasyBase {
    charges?: PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsCharges[];
    sequence: number;
    triggerDates?: PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsTriggerDates[];
}
export declare class PutOrderActionTriggerDatesRequestTypeSubscriptions extends SpeakeasyBase {
    orderActions?: PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActions[];
    subscriptionNumber: string;
}
export declare class PutOrderActionTriggerDatesRequestType extends SpeakeasyBase {
    subscriptions?: PutOrderActionTriggerDatesRequestTypeSubscriptions[];
}
