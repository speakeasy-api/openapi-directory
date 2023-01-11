import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutSubscriptionPatchRequestTypeRatePlansCharges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chargeId" })
  chargeId?: string;

  @SpeakeasyMetadata({ data: "json, name=chargeNumber" })
  chargeNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=customFields" })
  customFields?: Record<string, any>;
}


export class PutSubscriptionPatchRequestTypeRatePlans extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=charges", elemType: PutSubscriptionPatchRequestTypeRatePlansCharges })
  charges?: PutSubscriptionPatchRequestTypeRatePlansCharges[];

  @SpeakeasyMetadata({ data: "json, name=customFields" })
  customFields?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=ratePlanId" })
  ratePlanId: string;
}


export class PutSubscriptionPatchRequestType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customFields" })
  customFields?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=ratePlans", elemType: PutSubscriptionPatchRequestTypeRatePlans })
  ratePlans?: PutSubscriptionPatchRequestTypeRatePlans[];
}
