import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NewChargeMetrics } from "./newchargemetrics";



export class ChargeMetricsData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChargeMetrics", elemType: NewChargeMetrics })
  chargeMetrics?: NewChargeMetrics[];
}
