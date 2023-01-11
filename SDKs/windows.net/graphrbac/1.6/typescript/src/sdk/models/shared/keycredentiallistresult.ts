import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KeyCredentialListResult
/** 
 * KeyCredential list operation result.
**/
export class KeyCredentialListResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: Record<string, Record<string, any>>[];
}
