import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProviderAccountProfilesQueryParams extends SpeakeasyBase {
    providerAccountId?: string;
}
export declare class GetProviderAccountProfilesRequest extends SpeakeasyBase {
    queryParams: GetProviderAccountProfilesQueryParams;
}
export declare class GetProviderAccountProfilesResponse extends SpeakeasyBase {
    contentType: string;
    providerAccountUserProfileResponse?: shared.ProviderAccountUserProfileResponse;
    statusCode: number;
}
