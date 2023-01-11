import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAllAccountsQueryParams extends SpeakeasyBase {
    accountId?: string;
    container?: string;
    include?: string;
    providerAccountId?: string;
    requestId?: string;
    status?: string;
}
export declare class GetAllAccountsRequest extends SpeakeasyBase {
    queryParams: GetAllAccountsQueryParams;
}
export declare class GetAllAccountsResponse extends SpeakeasyBase {
    accountResponse?: shared.AccountResponse;
    contentType: string;
    statusCode: number;
    yodleeError?: shared.YodleeError;
}
