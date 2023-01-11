import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RampIntervalChargeDeltaMetricsDeltaMrr extends SpeakeasyBase {
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


export class RampIntervalChargeDeltaMetricsDeltaQuantity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: Date;
}


export class RampIntervalChargeDeltaMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chargeNumber" })
  chargeNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=deltaDiscountTcb" })
  deltaDiscountTcb?: number;

  @SpeakeasyMetadata({ data: "json, name=deltaDiscountTcv" })
  deltaDiscountTcv?: number;

  @SpeakeasyMetadata({ data: "json, name=deltaGrossTcb" })
  deltaGrossTcb?: number;

  @SpeakeasyMetadata({ data: "json, name=deltaGrossTcv" })
  deltaGrossTcv?: number;

  @SpeakeasyMetadata({ data: "json, name=deltaMrr", elemType: RampIntervalChargeDeltaMetricsDeltaMrr })
  deltaMrr?: RampIntervalChargeDeltaMetricsDeltaMrr[];

  @SpeakeasyMetadata({ data: "json, name=deltaNetTcb" })
  deltaNetTcb?: number;

  @SpeakeasyMetadata({ data: "json, name=deltaNetTcv" })
  deltaNetTcv?: number;

  @SpeakeasyMetadata({ data: "json, name=deltaQuantity", elemType: RampIntervalChargeDeltaMetricsDeltaQuantity })
  deltaQuantity?: RampIntervalChargeDeltaMetricsDeltaQuantity[];

  @SpeakeasyMetadata({ data: "json, name=productRatePlanChargeId" })
  productRatePlanChargeId?: string;

  @SpeakeasyMetadata({ data: "json, name=subscriptionNumber" })
  subscriptionNumber?: string;
}
