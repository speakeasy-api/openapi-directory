import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InitiateMatchingOrChallengeDepositeVerificationRequest extends SpeakeasyBase {
    request: shared.VerificationRequestInput;
}
export declare class InitiateMatchingOrChallengeDepositeVerificationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    verificationResponse?: shared.VerificationResponse;
    yodleeError?: shared.YodleeError;
}
