import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostCancelStoredCredentialProfilePathParams extends SpeakeasyBase {
    paymentMethodId: string;
    profileNumber: number;
}
export declare class PostCancelStoredCredentialProfileHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostCancelStoredCredentialProfileRequest extends SpeakeasyBase {
    pathParams: PostCancelStoredCredentialProfilePathParams;
    headers: PostCancelStoredCredentialProfileHeaders;
}
export declare class PostCancelStoredCredentialProfileResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    modifiedStoredCredentialProfileResponse?: shared.ModifiedStoredCredentialProfileResponse;
    statusCode: number;
}
