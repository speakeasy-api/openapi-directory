import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RatePlanChargeTier } from "./rateplanchargetier";



export class RatePlanChargeData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RatePlanCharge" })
  ratePlanCharge: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=RatePlanChargeTier", elemType: RatePlanChargeTier })
  ratePlanChargeTier?: RatePlanChargeTier[];
}
