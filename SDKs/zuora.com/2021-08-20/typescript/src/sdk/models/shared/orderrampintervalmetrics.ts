import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RampIntervalChargeDeltaMetrics } from "./rampintervalchargedeltametrics";
import { RampIntervalChargeMetrics } from "./rampintervalchargemetrics";



export class OrderRampIntervalMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=discountTcb" })
  discountTcb?: number;

  @SpeakeasyMetadata({ data: "json, name=discountTcv" })
  discountTcv?: number;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=grossTcb" })
  grossTcb?: number;

  @SpeakeasyMetadata({ data: "json, name=grossTcv" })
  grossTcv?: number;

  @SpeakeasyMetadata({ data: "json, name=intervalDeltaMetrics", elemType: RampIntervalChargeDeltaMetrics })
  intervalDeltaMetrics?: RampIntervalChargeDeltaMetrics[];

  @SpeakeasyMetadata({ data: "json, name=intervalMetrics", elemType: RampIntervalChargeMetrics })
  intervalMetrics?: RampIntervalChargeMetrics[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=netTcb" })
  netTcb?: number;

  @SpeakeasyMetadata({ data: "json, name=netTcv" })
  netTcv?: number;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: Date;
}
