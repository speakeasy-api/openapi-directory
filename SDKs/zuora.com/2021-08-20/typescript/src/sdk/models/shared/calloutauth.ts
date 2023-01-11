import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CalloutAuth
/** 
 * If requiredAuth is true, this object is required.
**/
export class CalloutAuth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=preemptive" })
  preemptive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
