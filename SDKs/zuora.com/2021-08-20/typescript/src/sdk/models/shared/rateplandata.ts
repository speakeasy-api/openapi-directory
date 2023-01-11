import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RatePlanChargeData } from "./rateplanchargedata";



export class RatePlanDataSubscriptionProductFeatureList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SubscriptionProductFeature" })
  subscriptionProductFeature?: Record<string, any>[];
}


export class RatePlanData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RatePlan" })
  ratePlan: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=RatePlanChargeData", elemType: RatePlanChargeData })
  ratePlanChargeData?: RatePlanChargeData[];

  @SpeakeasyMetadata({ data: "json, name=SubscriptionProductFeatureList" })
  subscriptionProductFeatureList?: RatePlanDataSubscriptionProductFeatureList;
}
