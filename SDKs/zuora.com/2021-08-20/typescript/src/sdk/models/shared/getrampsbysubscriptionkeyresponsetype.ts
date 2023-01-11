import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RampResponse } from "./rampresponse";



export class GetRampsBySubscriptionKeyResponseTypeReasons extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetRampsBySubscriptionKeyResponseType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=processId" })
  processId?: string;

  @SpeakeasyMetadata({ data: "json, name=ramps", elemType: RampResponse })
  ramps?: RampResponse[];

  @SpeakeasyMetadata({ data: "json, name=reasons", elemType: GetRampsBySubscriptionKeyResponseTypeReasons })
  reasons?: GetRampsBySubscriptionKeyResponseTypeReasons[];

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
