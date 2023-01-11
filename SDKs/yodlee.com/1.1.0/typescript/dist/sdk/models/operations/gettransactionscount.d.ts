import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTransactionsCountQueryParams extends SpeakeasyBase {
    accountId?: string;
    baseType?: string;
    categoryId?: string;
    categoryType?: string;
    container?: string;
    detailCategoryId?: string;
    fromDate?: string;
    highLevelCategoryId?: string;
    keyword?: string;
    toDate?: string;
    type?: string;
}
export declare class GetTransactionsCountRequest extends SpeakeasyBase {
    queryParams: GetTransactionsCountQueryParams;
}
export declare class GetTransactionsCountResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    transactionCountResponse?: shared.TransactionCountResponse;
    yodleeError?: shared.YodleeError;
}
