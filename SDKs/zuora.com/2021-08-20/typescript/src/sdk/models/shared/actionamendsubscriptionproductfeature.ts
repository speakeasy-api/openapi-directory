import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ActionAmendSubscriptionProductFeature extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedById" })
  createdById?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=FeatureCode" })
  featureCode?: string;

  @SpeakeasyMetadata({ data: "json, name=FeatureId" })
  featureId?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=RatePlanId" })
  ratePlanId?: string;

  @SpeakeasyMetadata({ data: "json, name=UpdatedById" })
  updatedById?: string;

  @SpeakeasyMetadata({ data: "json, name=UpdatedDate" })
  updatedDate?: Date;
}
