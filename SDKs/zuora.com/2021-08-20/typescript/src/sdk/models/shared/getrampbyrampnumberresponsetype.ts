import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RampResponse } from "./rampresponse";



export class GetRampByRampNumberResponseTypeReasons extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetRampByRampNumberResponseType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=processId" })
  processId?: string;

  @SpeakeasyMetadata({ data: "json, name=ramp" })
  ramp?: RampResponse;

  @SpeakeasyMetadata({ data: "json, name=reasons", elemType: GetRampByRampNumberResponseTypeReasons })
  reasons?: GetRampByRampNumberResponseTypeReasons[];

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
