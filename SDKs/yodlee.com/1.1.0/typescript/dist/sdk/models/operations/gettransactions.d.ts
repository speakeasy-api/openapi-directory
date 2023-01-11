import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTransactionsQueryParams extends SpeakeasyBase {
    accountId?: string;
    baseType?: string;
    categoryId?: string;
    categoryType?: string;
    container?: string;
    detailCategoryId?: string;
    fromDate?: string;
    highLevelCategoryId?: string;
    keyword?: string;
    skip?: number;
    toDate?: string;
    top?: number;
    type?: string;
}
export declare class GetTransactionsRequest extends SpeakeasyBase {
    queryParams: GetTransactionsQueryParams;
}
export declare class GetTransactionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    transactionResponse?: shared.TransactionResponse;
    yodleeError?: shared.YodleeError;
}
