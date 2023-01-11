import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RampIntervalChargeMetricsMrr extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=discount" })
  discount?: number;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=gross" })
  gross?: number;

  @SpeakeasyMetadata({ data: "json, name=net" })
  net?: number;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: Date;
}


export class RampIntervalChargeMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chargeNumber" })
  chargeNumber?: string;

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

  @SpeakeasyMetadata({ data: "json, name=mrr", elemType: RampIntervalChargeMetricsMrr })
  mrr?: RampIntervalChargeMetricsMrr[];

  @SpeakeasyMetadata({ data: "json, name=netTcb" })
  netTcb?: number;

  @SpeakeasyMetadata({ data: "json, name=netTcv" })
  netTcv?: number;

  @SpeakeasyMetadata({ data: "json, name=productRatePlanChargeId" })
  productRatePlanChargeId?: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=ratePlanChargeId" })
  ratePlanChargeId?: string;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=subscriptionNumber" })
  subscriptionNumber?: string;
}
