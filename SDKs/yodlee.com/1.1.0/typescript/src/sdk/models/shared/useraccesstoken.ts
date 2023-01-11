import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessTokens } from "./accesstokens";



export class UserAccessToken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessTokens", elemType: AccessTokens })
  accessTokens?: AccessTokens[];
}
