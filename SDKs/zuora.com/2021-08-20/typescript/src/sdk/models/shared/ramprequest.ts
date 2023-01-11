import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RampChargeRequest } from "./rampchargerequest";
import { RampIntervalRequest } from "./rampintervalrequest";



// RampRequest
/** 
 * Container of the ramp definitions. It is used to create, update, or remove the ramp definition for the new subscription.
 * 
**/
export class RampRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=charges", elemType: RampChargeRequest })
  charges?: RampChargeRequest[];

  @SpeakeasyMetadata({ data: "json, name=delete" })
  delete?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=intervals", elemType: RampIntervalRequest })
  intervals?: RampIntervalRequest[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
