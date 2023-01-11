import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RatePlan extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AmendmentId" })
  amendmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=AmendmentSubscriptionRatePlanId" })
  amendmentSubscriptionRatePlanId?: string;

  @SpeakeasyMetadata({ data: "json, name=AmendmentType" })
  amendmentType?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedById" })
  createdById?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ProductRatePlanId" })
  productRatePlanId: string;

  @SpeakeasyMetadata({ data: "json, name=SubscriptionId" })
  subscriptionId?: string;

  @SpeakeasyMetadata({ data: "json, name=UpdatedById" })
  updatedById?: string;

  @SpeakeasyMetadata({ data: "json, name=UpdatedDate" })
  updatedDate?: Date;
}
