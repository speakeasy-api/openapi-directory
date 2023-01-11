import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountPathParams extends SpeakeasyBase {
    accountId: number;
}
export declare class GetAccountQueryParams extends SpeakeasyBase {
    include?: string;
}
export declare class GetAccountRequest extends SpeakeasyBase {
    pathParams: GetAccountPathParams;
    queryParams: GetAccountQueryParams;
}
export declare class GetAccountResponse extends SpeakeasyBase {
    accountResponse?: shared.AccountResponse;
    contentType: string;
    statusCode: number;
}
