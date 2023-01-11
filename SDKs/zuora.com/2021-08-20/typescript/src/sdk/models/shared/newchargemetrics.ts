import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NewChargeMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChargeNumber" })
  chargeNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=DMRR" })
  dmrr?: number;

  @SpeakeasyMetadata({ data: "json, name=DTCV" })
  dtcv?: number;

  @SpeakeasyMetadata({ data: "json, name=MRR" })
  mrr?: number;

  @SpeakeasyMetadata({ data: "json, name=OriginalId" })
  originalId?: string;

  @SpeakeasyMetadata({ data: "json, name=OriginalRatePlanId" })
  originalRatePlanId?: string;

  @SpeakeasyMetadata({ data: "json, name=ProductRatePlanChargeId" })
  productRatePlanChargeId?: string;

  @SpeakeasyMetadata({ data: "json, name=ProductRatePlanId" })
  productRatePlanId?: string;

  @SpeakeasyMetadata({ data: "json, name=TCV" })
  tcv?: number;
}
