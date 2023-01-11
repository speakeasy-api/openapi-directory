import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InitiateAccountVerificationPathParams extends SpeakeasyBase {
    providerAccountId: string;
}
export declare class InitiateAccountVerificationRequest extends SpeakeasyBase {
    pathParams: InitiateAccountVerificationPathParams;
    request: shared.VerifyAccountRequestInput;
}
export declare class InitiateAccountVerificationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    verifyAccountResponse?: shared.VerifyAccountResponse;
    yodleeError?: shared.YodleeError;
}
