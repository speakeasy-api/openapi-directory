import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateTokenHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}

export enum CreateTokenRequestBodyGrantTypeEnum {
    ClientCredentials = "client_credentials"
}


export class CreateTokenRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=client_id;" })
  clientId: string;

  @SpeakeasyMetadata({ data: "form, name=client_secret;" })
  clientSecret: string;

  @SpeakeasyMetadata({ data: "form, name=grant_type;" })
  grantType: CreateTokenRequestBodyGrantTypeEnum;
}


export class CreateTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateTokenHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: CreateTokenRequestBody;
}


export class CreateTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tokenResponse?: shared.TokenResponse;
}
