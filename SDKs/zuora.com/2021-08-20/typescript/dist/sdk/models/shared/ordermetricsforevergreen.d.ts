import { SpeakeasyBase } from "../../../internal/utils";
import { TimeSlicedNetMetricsForEvergreen } from "./timeslicednetmetricsforevergreen";
import { TimeSlicedMetricsForEvergreen } from "./timeslicedmetricsforevergreen";
import { TimeSlicedTcbNetMetricsForEvergreen } from "./timeslicedtcbnetmetricsforevergreen";
export declare class OrderMetricsForEvergreen extends SpeakeasyBase {
    chargeNumber?: string;
    mrr?: TimeSlicedNetMetricsForEvergreen[];
    originRatePlanId?: string;
    productRatePlanChargeId?: string;
    productRatePlanId?: string;
    quantity?: TimeSlicedMetricsForEvergreen[];
    tcb?: TimeSlicedTcbNetMetricsForEvergreen[];
    tcv?: TimeSlicedNetMetricsForEvergreen[];
}
