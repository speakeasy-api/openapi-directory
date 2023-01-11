import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class VerifyChallengeDepositRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UpdateVerificationRequestInput;
}


export class VerifyChallengeDepositResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  verificationResponse?: shared.VerificationResponse;

  @SpeakeasyMetadata()
  yodleeError?: shared.YodleeError;
}
