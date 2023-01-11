import { SpeakeasyBase } from "../../../internal/utils";
export declare class RampIntervalChargeDeltaMetricsDeltaMrr extends SpeakeasyBase {
    discount?: number;
    endDate?: Date;
    gross?: number;
    net?: number;
    startDate?: Date;
}
export declare class RampIntervalChargeDeltaMetricsDeltaQuantity extends SpeakeasyBase {
    amount?: number;
    endDate?: Date;
    startDate?: Date;
}
export declare class RampIntervalChargeDeltaMetrics extends SpeakeasyBase {
    chargeNumber?: string;
    deltaDiscountTcb?: number;
    deltaDiscountTcv?: number;
    deltaGrossTcb?: number;
    deltaGrossTcv?: number;
    deltaMrr?: RampIntervalChargeDeltaMetricsDeltaMrr[];
    deltaNetTcb?: number;
    deltaNetTcv?: number;
    deltaQuantity?: RampIntervalChargeDeltaMetricsDeltaQuantity[];
    productRatePlanChargeId?: string;
    subscriptionNumber?: string;
}
