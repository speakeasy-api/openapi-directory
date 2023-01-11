import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserSession extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=userSession" })
  userSession?: string;
}
