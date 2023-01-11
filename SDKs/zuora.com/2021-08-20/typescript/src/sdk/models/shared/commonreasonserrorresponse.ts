import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CommonReasonsErrorResponseReasons extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CommonReasonsErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reasons", elemType: CommonReasonsErrorResponseReasons })
  reasons?: CommonReasonsErrorResponseReasons[];
}
