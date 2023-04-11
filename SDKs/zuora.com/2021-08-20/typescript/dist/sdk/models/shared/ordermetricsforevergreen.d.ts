import { SpeakeasyBase } from "../../../internal/utils";
import { TimeSlicedMetricsForEvergreen } from "./timeslicedmetricsforevergreen";
import { TimeSlicedNetMetricsForEvergreen } from "./timeslicednetmetricsforevergreen";
import { TimeSlicedTcbNetMetricsForEvergreen } from "./timeslicedtcbnetmetricsforevergreen";
export declare class OrderMetricsForEvergreen extends SpeakeasyBase {
    chargeNumber?: string;
    mrr?: TimeSlicedNetMetricsForEvergreen[];
    originRatePlanId?: string;
    productRatePlanChargeId?: string;
    productRatePlanId?: string;
    quantity?: TimeSlicedMetricsForEvergreen[];
    /**
     * Total contracted billing which is the forecast value for the total invoice amount.
     */
    tcb?: TimeSlicedTcbNetMetricsForEvergreen[];
    /**
     * Total contracted value.
     */
    tcv?: TimeSlicedNetMetricsForEvergreen[];
}
