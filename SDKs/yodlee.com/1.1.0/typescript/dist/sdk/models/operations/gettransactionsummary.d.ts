import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTransactionSummaryQueryParams extends SpeakeasyBase {
    accountId?: string;
    categoryId?: string;
    categoryType?: string;
    fromDate?: string;
    groupBy: string;
    include?: string;
    includeUserCategory?: boolean;
    interval?: string;
    toDate?: string;
}
export declare class GetTransactionSummaryRequest extends SpeakeasyBase {
    queryParams: GetTransactionSummaryQueryParams;
}
export declare class GetTransactionSummaryResponse extends SpeakeasyBase {
    contentType: string;
    derivedTransactionSummaryResponse?: shared.DerivedTransactionSummaryResponse;
    statusCode: number;
    yodleeError?: shared.YodleeError;
}
