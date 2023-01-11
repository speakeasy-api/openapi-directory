import { SpeakeasyBase } from "../../../internal/utils";
import { TimeSlicedElpNetMetrics } from "./timeslicedelpnetmetrics";
import { TimeSlicedNetMetrics } from "./timeslicednetmetrics";
import { TimeSlicedMetrics } from "./timeslicedmetrics";
import { TimeSlicedTcbNetMetrics } from "./timeslicedtcbnetmetrics";
/**
 * The set of order metrics for an order action.
**/
export declare class OrderMetric extends SpeakeasyBase {
    chargeNumber?: string;
    elp?: TimeSlicedElpNetMetrics[];
    mrr?: TimeSlicedNetMetrics[];
    originRatePlanId?: string;
    productRatePlanChargeId?: string;
    productRatePlanId?: string;
    quantity?: TimeSlicedMetrics[];
    tcb?: TimeSlicedTcbNetMetrics[];
    tcv?: TimeSlicedNetMetrics[];
}
