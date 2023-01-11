import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RampMetrics } from "./rampmetrics";



export class GetRampMetricsByRampNumberResponseTypeReasons extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetRampMetricsByRampNumberResponseType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=processId" })
  processId?: string;

  @SpeakeasyMetadata({ data: "json, name=rampMetrics" })
  rampMetrics?: RampMetrics;

  @SpeakeasyMetadata({ data: "json, name=reasons", elemType: GetRampMetricsByRampNumberResponseTypeReasons })
  reasons?: GetRampMetricsByRampNumberResponseTypeReasons[];

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
