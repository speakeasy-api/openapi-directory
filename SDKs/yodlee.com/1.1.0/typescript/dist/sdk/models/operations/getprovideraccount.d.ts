import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProviderAccountPathParams extends SpeakeasyBase {
    providerAccountId: number;
}
export declare class GetProviderAccountQueryParams extends SpeakeasyBase {
    include?: string;
    requestId?: string;
}
export declare class GetProviderAccountRequest extends SpeakeasyBase {
    pathParams: GetProviderAccountPathParams;
    queryParams: GetProviderAccountQueryParams;
}
export declare class GetProviderAccountResponse extends SpeakeasyBase {
    contentType: string;
    providerAccountDetailResponse?: shared.ProviderAccountDetailResponse;
    statusCode: number;
    yodleeError?: shared.YodleeError;
}
