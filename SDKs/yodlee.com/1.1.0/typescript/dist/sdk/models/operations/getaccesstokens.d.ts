import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccessTokensQueryParams extends SpeakeasyBase {
    appIds: string;
}
export declare class GetAccessTokensRequest extends SpeakeasyBase {
    queryParams: GetAccessTokensQueryParams;
}
export declare class GetAccessTokensResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userAccessTokensResponse?: shared.UserAccessTokensResponse;
}
