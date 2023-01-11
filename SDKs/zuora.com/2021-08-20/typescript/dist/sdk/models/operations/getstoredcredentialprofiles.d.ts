import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStoredCredentialProfilesPathParams extends SpeakeasyBase {
    paymentMethodId: string;
}
export declare class GetStoredCredentialProfilesQueryParams extends SpeakeasyBase {
    includeAll?: boolean;
}
export declare class GetStoredCredentialProfilesHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetStoredCredentialProfilesRequest extends SpeakeasyBase {
    pathParams: GetStoredCredentialProfilesPathParams;
    queryParams: GetStoredCredentialProfilesQueryParams;
    headers: GetStoredCredentialProfilesHeaders;
}
export declare class GetStoredCredentialProfilesResponse extends SpeakeasyBase {
    contentType: string;
    getStoredCredentialProfilesResponse?: shared.GetStoredCredentialProfilesResponse;
    headers: Record<string, string[]>;
    statusCode: number;
}
