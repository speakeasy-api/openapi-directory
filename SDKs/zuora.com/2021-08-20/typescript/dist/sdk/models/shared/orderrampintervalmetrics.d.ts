import { SpeakeasyBase } from "../../../internal/utils";
import { RampIntervalChargeDeltaMetrics } from "./rampintervalchargedeltametrics";
import { RampIntervalChargeMetrics } from "./rampintervalchargemetrics";
export declare class OrderRampIntervalMetrics extends SpeakeasyBase {
    description?: string;
    discountTcb?: number;
    discountTcv?: number;
    endDate?: Date;
    grossTcb?: number;
    grossTcv?: number;
    intervalDeltaMetrics?: RampIntervalChargeDeltaMetrics[];
    intervalMetrics?: RampIntervalChargeMetrics[];
    name?: string;
    netTcb?: number;
    netTcv?: number;
    startDate?: Date;
}
