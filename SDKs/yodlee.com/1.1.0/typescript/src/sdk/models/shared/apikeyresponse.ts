import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiKeyOutput } from "./apikeyoutput";



export class ApiKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiKey", elemType: ApiKeyOutput })
  apiKey?: ApiKeyOutput[];
}
