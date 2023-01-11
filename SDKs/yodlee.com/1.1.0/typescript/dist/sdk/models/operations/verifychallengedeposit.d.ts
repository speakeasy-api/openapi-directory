import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VerifyChallengeDepositRequest extends SpeakeasyBase {
    request: shared.UpdateVerificationRequestInput;
}
export declare class VerifyChallengeDepositResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    verificationResponse?: shared.VerificationResponse;
    yodleeError?: shared.YodleeError;
}
