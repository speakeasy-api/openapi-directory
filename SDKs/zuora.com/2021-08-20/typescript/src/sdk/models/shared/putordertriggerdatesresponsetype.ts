import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutOrderTriggerDatesResponseTypeReasons extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}

export enum PutOrderTriggerDatesResponseTypeStatusEnum {
    Completed = "Completed",
    Pending = "Pending"
}

export enum PutOrderTriggerDatesResponseTypeSubscriptionsStatusEnum {
    Active = "Active",
    PendingActivation = "Pending Activation",
    PendingAcceptance = "Pending Acceptance"
}


export class PutOrderTriggerDatesResponseTypeSubscriptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: PutOrderTriggerDatesResponseTypeSubscriptionsStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=subscriptionNumber" })
  subscriptionNumber?: string;
}


export class PutOrderTriggerDatesResponseType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountNumber" })
  accountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=orderNumber" })
  orderNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=processId" })
  processId?: string;

  @SpeakeasyMetadata({ data: "json, name=reasons", elemType: PutOrderTriggerDatesResponseTypeReasons })
  reasons?: PutOrderTriggerDatesResponseTypeReasons[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: PutOrderTriggerDatesResponseTypeStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=subscriptions", elemType: PutOrderTriggerDatesResponseTypeSubscriptions })
  subscriptions?: PutOrderTriggerDatesResponseTypeSubscriptions[];

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
