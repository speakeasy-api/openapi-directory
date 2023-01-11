import { SpeakeasyBase } from "../../../internal/utils";
import { RatePlanChargeData } from "./rateplanchargedata";
export declare class RatePlanDataSubscriptionProductFeatureList extends SpeakeasyBase {
    subscriptionProductFeature?: Record<string, any>[];
}
export declare class RatePlanData extends SpeakeasyBase {
    ratePlan: Record<string, any>;
    ratePlanChargeData?: RatePlanChargeData[];
    subscriptionProductFeatureList?: RatePlanDataSubscriptionProductFeatureList;
}
