import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PasswordCredentialsUpdateParameters
/** 
 * Request parameters for a PasswordCredentials update operation.
**/
export class PasswordCredentialsUpdateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=value" })
  value: Record<string, Record<string, any>>[];
}
