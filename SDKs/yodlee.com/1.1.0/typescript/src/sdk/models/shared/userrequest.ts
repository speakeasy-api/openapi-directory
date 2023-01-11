import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserRegistration } from "./userregistration";



export class UserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=user" })
  user: UserRegistration;
}
