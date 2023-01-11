import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostCreateStoredCredentialProfilePathParams extends SpeakeasyBase {
    paymentMethodId: string;
}
export declare class PostCreateStoredCredentialProfileHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostCreateStoredCredentialProfileRequest extends SpeakeasyBase {
    pathParams: PostCreateStoredCredentialProfilePathParams;
    headers: PostCreateStoredCredentialProfileHeaders;
    request: shared.CreateStoredCredentialProfileRequest;
}
export declare class PostCreateStoredCredentialProfileResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    modifiedStoredCredentialProfileResponse?: shared.ModifiedStoredCredentialProfileResponse;
    statusCode: number;
}
