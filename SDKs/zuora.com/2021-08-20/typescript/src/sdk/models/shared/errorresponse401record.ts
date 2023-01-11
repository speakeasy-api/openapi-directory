import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Error401 } from "./error401";



export class ErrorResponse401Record extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=details", elemType: Error401 })
  details?: Error401[];

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
