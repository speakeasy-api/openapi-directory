import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ChargePreviewMetricsCmrr extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=discount" })
  discount?: number;

  @SpeakeasyMetadata({ data: "json, name=discountDelta" })
  discountDelta?: number;

  @SpeakeasyMetadata({ data: "json, name=regular" })
  regular?: number;

  @SpeakeasyMetadata({ data: "json, name=regularDelta" })
  regularDelta?: number;
}


export class ChargePreviewMetricsTax extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=discount" })
  discount?: number;

  @SpeakeasyMetadata({ data: "json, name=discountDelta" })
  discountDelta?: number;

  @SpeakeasyMetadata({ data: "json, name=regular" })
  regular?: number;

  @SpeakeasyMetadata({ data: "json, name=regularDelta" })
  regularDelta?: number;
}


export class ChargePreviewMetricsTcb extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=discount" })
  discount?: number;

  @SpeakeasyMetadata({ data: "json, name=discountDelta" })
  discountDelta?: number;

  @SpeakeasyMetadata({ data: "json, name=regular" })
  regular?: number;

  @SpeakeasyMetadata({ data: "json, name=regularDelta" })
  regularDelta?: number;
}


export class ChargePreviewMetricsTcv extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=discount" })
  discount?: number;

  @SpeakeasyMetadata({ data: "json, name=discountDelta" })
  discountDelta?: number;

  @SpeakeasyMetadata({ data: "json, name=regular" })
  regular?: number;

  @SpeakeasyMetadata({ data: "json, name=regularDelta" })
  regularDelta?: number;
}


export class ChargePreviewMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chargeNumber" })
  chargeNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=cmrr" })
  cmrr?: ChargePreviewMetricsCmrr;

  @SpeakeasyMetadata({ data: "json, name=originRatePlanId" })
  originRatePlanId?: string;

  @SpeakeasyMetadata({ data: "json, name=productRatePlanChargeId" })
  productRatePlanChargeId?: string;

  @SpeakeasyMetadata({ data: "json, name=productRatePlanId" })
  productRatePlanId?: string;

  @SpeakeasyMetadata({ data: "json, name=tax" })
  tax?: ChargePreviewMetricsTax;

  @SpeakeasyMetadata({ data: "json, name=tcb" })
  tcb?: ChargePreviewMetricsTcb;

  @SpeakeasyMetadata({ data: "json, name=tcv" })
  tcv?: ChargePreviewMetricsTcv;
}
