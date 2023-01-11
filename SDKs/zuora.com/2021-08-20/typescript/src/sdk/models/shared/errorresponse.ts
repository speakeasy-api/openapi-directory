import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ErrorResponseReasons extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reasons", elemType: ErrorResponseReasons })
  reasons?: ErrorResponseReasons[];
}
