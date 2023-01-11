import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimeSlicedNetMetricsForEvergreen } from "./timeslicednetmetricsforevergreen";
import { TimeSlicedMetricsForEvergreen } from "./timeslicedmetricsforevergreen";
import { TimeSlicedTcbNetMetricsForEvergreen } from "./timeslicedtcbnetmetricsforevergreen";



export class OrderMetricsForEvergreen extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chargeNumber" })
  chargeNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=mrr", elemType: TimeSlicedNetMetricsForEvergreen })
  mrr?: TimeSlicedNetMetricsForEvergreen[];

  @SpeakeasyMetadata({ data: "json, name=originRatePlanId" })
  originRatePlanId?: string;

  @SpeakeasyMetadata({ data: "json, name=productRatePlanChargeId" })
  productRatePlanChargeId?: string;

  @SpeakeasyMetadata({ data: "json, name=productRatePlanId" })
  productRatePlanId?: string;

  @SpeakeasyMetadata({ data: "json, name=quantity", elemType: TimeSlicedMetricsForEvergreen })
  quantity?: TimeSlicedMetricsForEvergreen[];

  @SpeakeasyMetadata({ data: "json, name=tcb", elemType: TimeSlicedTcbNetMetricsForEvergreen })
  tcb?: TimeSlicedTcbNetMetricsForEvergreen[];

  @SpeakeasyMetadata({ data: "json, name=tcv", elemType: TimeSlicedNetMetricsForEvergreen })
  tcv?: TimeSlicedNetMetricsForEvergreen[];
}
