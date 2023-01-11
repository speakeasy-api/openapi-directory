import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KeyCredentialsUpdateParameters
/** 
 * Request parameters for a KeyCredentials update operation
**/
export class KeyCredentialsUpdateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=value" })
  value: Record<string, Record<string, any>>[];
}
