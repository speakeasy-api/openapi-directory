import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsCharges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chargeNumber" })
  chargeNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=specificTriggerDate" })
  specificTriggerDate?: Date;
}

export enum PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsTriggerDatesNameEnum {
    ServiceActivation = "ServiceActivation",
    CustomerAcceptance = "CustomerAcceptance"
}


export class PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsTriggerDates extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsTriggerDatesNameEnum;

  @SpeakeasyMetadata({ data: "json, name=triggerDate" })
  triggerDate?: Date;
}


export class PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=charges", elemType: PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsCharges })
  charges?: PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsCharges[];

  @SpeakeasyMetadata({ data: "json, name=sequence" })
  sequence: number;

  @SpeakeasyMetadata({ data: "json, name=triggerDates", elemType: PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsTriggerDates })
  triggerDates?: PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsTriggerDates[];
}


export class PutOrderActionTriggerDatesRequestTypeSubscriptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=orderActions", elemType: PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActions })
  orderActions?: PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActions[];

  @SpeakeasyMetadata({ data: "json, name=subscriptionNumber" })
  subscriptionNumber: string;
}


export class PutOrderActionTriggerDatesRequestType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=subscriptions", elemType: PutOrderActionTriggerDatesRequestTypeSubscriptions })
  subscriptions?: PutOrderActionTriggerDatesRequestTypeSubscriptions[];
}
