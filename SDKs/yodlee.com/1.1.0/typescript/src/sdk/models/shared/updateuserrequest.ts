import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpdateUserRegistration } from "./updateuserregistration";



export class UpdateUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=user" })
  user: UpdateUserRegistration;
}
