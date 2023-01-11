import { SpeakeasyBase } from "../../../internal/utils";
export declare class RampIntervalChargeMetricsMrr extends SpeakeasyBase {
    discount?: number;
    endDate?: Date;
    gross?: number;
    net?: number;
    startDate?: Date;
}
export declare class RampIntervalChargeMetrics extends SpeakeasyBase {
    chargeNumber?: string;
    discountTcb?: number;
    discountTcv?: number;
    endDate?: Date;
    grossTcb?: number;
    grossTcv?: number;
    mrr?: RampIntervalChargeMetricsMrr[];
    netTcb?: number;
    netTcv?: number;
    productRatePlanChargeId?: string;
    quantity?: number;
    ratePlanChargeId?: string;
    startDate?: Date;
    subscriptionNumber?: string;
}
