import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";



export class UserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: User;
}
