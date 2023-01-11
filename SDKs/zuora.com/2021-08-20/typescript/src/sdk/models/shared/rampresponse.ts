import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RampChargeResponse } from "./rampchargeresponse";
import { RampIntervalResponse } from "./rampintervalresponse";



export class RampResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=charges", elemType: RampChargeResponse })
  charges?: RampChargeResponse[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=intervals", elemType: RampIntervalResponse })
  intervals?: RampIntervalResponse[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=subscriptionNumber" })
  subscriptionNumber?: string;
}
