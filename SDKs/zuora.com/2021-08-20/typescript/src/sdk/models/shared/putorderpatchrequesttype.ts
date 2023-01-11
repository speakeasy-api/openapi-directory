import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutOrderPatchRequestTypeSubscriptionsOrderActions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customFields" })
  customFields?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=orderActionId" })
  orderActionId?: string;

  @SpeakeasyMetadata({ data: "json, name=sequence" })
  sequence?: number;
}


export class PutOrderPatchRequestTypeSubscriptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=orderActions", elemType: PutOrderPatchRequestTypeSubscriptionsOrderActions })
  orderActions?: PutOrderPatchRequestTypeSubscriptionsOrderActions[];

  @SpeakeasyMetadata({ data: "json, name=subscriptionNumber" })
  subscriptionNumber?: string;
}


export class PutOrderPatchRequestType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customFields" })
  customFields?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=subscriptions", elemType: PutOrderPatchRequestTypeSubscriptions })
  subscriptions?: PutOrderPatchRequestTypeSubscriptions[];
}
