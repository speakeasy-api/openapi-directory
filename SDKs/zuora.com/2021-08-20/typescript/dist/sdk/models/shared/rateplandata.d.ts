import { SpeakeasyBase } from "../../../internal/utils";
import { RatePlanChargeData } from "./rateplanchargedata";
import { RatePlanDataRatePlan } from "./rateplandatarateplan";
import { SubscriptionProductFeature } from "./subscriptionproductfeature";
export declare class RatePlanDataSubscriptionProductFeatureList extends SpeakeasyBase {
    subscriptionProductFeature?: SubscriptionProductFeature[];
}
export declare class RatePlanData extends SpeakeasyBase {
    ratePlan: RatePlanDataRatePlan;
    ratePlanChargeData?: RatePlanChargeData[];
    subscriptionProductFeatureList?: RatePlanDataSubscriptionProductFeatureList;
}
