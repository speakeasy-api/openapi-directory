import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ClientCredentialToken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessToken" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "json, name=expiresIn" })
  expiresIn?: number;

  @SpeakeasyMetadata({ data: "json, name=issuedAt" })
  issuedAt?: string;
}
