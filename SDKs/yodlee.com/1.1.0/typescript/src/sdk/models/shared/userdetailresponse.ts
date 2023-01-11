import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserDetail } from "./userdetail";



export class UserDetailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: UserDetail;
}
