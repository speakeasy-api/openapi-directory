import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostExpireStoredCredentialProfilePathParams extends SpeakeasyBase {
    paymentMethodId: string;
    profileNumber: number;
}
export declare class PostExpireStoredCredentialProfileHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostExpireStoredCredentialProfileRequest extends SpeakeasyBase {
    pathParams: PostExpireStoredCredentialProfilePathParams;
    headers: PostExpireStoredCredentialProfileHeaders;
}
export declare class PostExpireStoredCredentialProfileResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    modifiedStoredCredentialProfileResponse?: shared.ModifiedStoredCredentialProfileResponse;
    statusCode: number;
}
