import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetHistoricalBalancesQueryParams extends SpeakeasyBase {
    accountId?: string;
    fromDate?: string;
    includeCF?: boolean;
    interval?: string;
    skip?: number;
    toDate?: string;
    top?: number;
}
export declare class GetHistoricalBalancesRequest extends SpeakeasyBase {
    queryParams: GetHistoricalBalancesQueryParams;
}
export declare class GetHistoricalBalancesResponse extends SpeakeasyBase {
    accountHistoricalBalancesResponse?: shared.AccountHistoricalBalancesResponse;
    contentType: string;
    statusCode: number;
    yodleeError?: shared.YodleeError;
}
