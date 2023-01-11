import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAllProviderAccountsQueryParams extends SpeakeasyBase {
    include?: string;
    providerIds?: string;
}
export declare class GetAllProviderAccountsRequest extends SpeakeasyBase {
    queryParams: GetAllProviderAccountsQueryParams;
}
export declare class GetAllProviderAccountsResponse extends SpeakeasyBase {
    contentType: string;
    providerAccountResponse?: shared.ProviderAccountResponse;
    statusCode: number;
}
