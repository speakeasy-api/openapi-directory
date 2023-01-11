import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RampChargeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chargeNumber" })
  chargeNumber?: string;
}
