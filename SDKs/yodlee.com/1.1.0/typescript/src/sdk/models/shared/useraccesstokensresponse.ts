import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserAccessToken } from "./useraccesstoken";



export class UserAccessTokensResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: UserAccessToken;
}
