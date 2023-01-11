import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RampIntervalMetrics } from "./rampintervalmetrics";



export class RampMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=discountTcb" })
  discountTcb?: number;

  @SpeakeasyMetadata({ data: "json, name=discountTcv" })
  discountTcv?: number;

  @SpeakeasyMetadata({ data: "json, name=grossTcb" })
  grossTcb?: number;

  @SpeakeasyMetadata({ data: "json, name=grossTcv" })
  grossTcv?: number;

  @SpeakeasyMetadata({ data: "json, name=intervals", elemType: RampIntervalMetrics })
  intervals?: RampIntervalMetrics[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=netTcb" })
  netTcb?: number;

  @SpeakeasyMetadata({ data: "json, name=netTcv" })
  netTcv?: number;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;
}
