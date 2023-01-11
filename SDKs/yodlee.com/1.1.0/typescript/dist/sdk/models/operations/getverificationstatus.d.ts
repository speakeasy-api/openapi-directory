import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVerificationStatusQueryParams extends SpeakeasyBase {
    accountId?: string;
    providerAccountId?: string;
    verificationType?: string;
}
export declare class GetVerificationStatusRequest extends SpeakeasyBase {
    queryParams: GetVerificationStatusQueryParams;
}
export declare class GetVerificationStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    verificationStatusResponse?: shared.VerificationStatusResponse;
    yodleeError?: shared.YodleeError;
}
