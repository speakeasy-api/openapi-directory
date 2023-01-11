import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class InitiateAccountVerificationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=providerAccountId" })
  providerAccountId: string;
}


export class InitiateAccountVerificationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: InitiateAccountVerificationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.VerifyAccountRequestInput;
}


export class InitiateAccountVerificationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  verifyAccountResponse?: shared.VerifyAccountResponse;

  @SpeakeasyMetadata()
  yodleeError?: shared.YodleeError;
}
