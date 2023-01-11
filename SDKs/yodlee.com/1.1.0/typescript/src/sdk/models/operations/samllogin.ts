import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SamlLoginQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=issuer" })
  issuer: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=samlResponse" })
  samlResponse: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source" })
  source?: string;
}


export class SamlLoginRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SamlLoginQueryParams;
}


export class SamlLoginResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userResponse?: shared.UserResponse;

  @SpeakeasyMetadata()
  yodleeError?: shared.YodleeError;
}
