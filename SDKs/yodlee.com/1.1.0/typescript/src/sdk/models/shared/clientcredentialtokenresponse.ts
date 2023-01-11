import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClientCredentialToken } from "./clientcredentialtoken";



export class ClientCredentialTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: ClientCredentialToken;
}
