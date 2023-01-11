import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderRampMetrics } from "./orderrampmetrics";



export class GetRampMetricsByOrderNumberResponseTypeReasons extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetRampMetricsByOrderNumberResponseType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=processId" })
  processId?: string;

  @SpeakeasyMetadata({ data: "json, name=rampMetrics", elemType: OrderRampMetrics })
  rampMetrics?: OrderRampMetrics[];

  @SpeakeasyMetadata({ data: "json, name=reasons", elemType: GetRampMetricsByOrderNumberResponseTypeReasons })
  reasons?: GetRampMetricsByOrderNumberResponseTypeReasons[];

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
