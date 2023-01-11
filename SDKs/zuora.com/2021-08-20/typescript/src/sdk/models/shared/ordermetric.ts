import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimeSlicedElpNetMetrics } from "./timeslicedelpnetmetrics";
import { TimeSlicedNetMetrics } from "./timeslicednetmetrics";
import { TimeSlicedMetrics } from "./timeslicedmetrics";
import { TimeSlicedTcbNetMetrics } from "./timeslicedtcbnetmetrics";



// OrderMetric
/** 
 * The set of order metrics for an order action.
**/
export class OrderMetric extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chargeNumber" })
  chargeNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=elp", elemType: TimeSlicedElpNetMetrics })
  elp?: TimeSlicedElpNetMetrics[];

  @SpeakeasyMetadata({ data: "json, name=mrr", elemType: TimeSlicedNetMetrics })
  mrr?: TimeSlicedNetMetrics[];

  @SpeakeasyMetadata({ data: "json, name=originRatePlanId" })
  originRatePlanId?: string;

  @SpeakeasyMetadata({ data: "json, name=productRatePlanChargeId" })
  productRatePlanChargeId?: string;

  @SpeakeasyMetadata({ data: "json, name=productRatePlanId" })
  productRatePlanId?: string;

  @SpeakeasyMetadata({ data: "json, name=quantity", elemType: TimeSlicedMetrics })
  quantity?: TimeSlicedMetrics[];

  @SpeakeasyMetadata({ data: "json, name=tcb", elemType: TimeSlicedTcbNetMetrics })
  tcb?: TimeSlicedTcbNetMetrics[];

  @SpeakeasyMetadata({ data: "json, name=tcv", elemType: TimeSlicedNetMetrics })
  tcv?: TimeSlicedNetMetrics[];
}
