import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPotTransactionsPathParams extends SpeakeasyBase {
    potId: string;
}
export declare enum GetPotTransactionsSortEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class GetPotTransactionsQueryParams extends SpeakeasyBase {
    from?: string;
    pageNumber?: string;
    pageSize?: string;
    sort?: GetPotTransactionsSortEnum;
    subTransactionType?: string;
    to?: string;
}
export declare class GetPotTransactionsHeaders extends SpeakeasyBase {
    xApiKey: string;
}
export declare class GetPotTransactionsSecurity extends SpeakeasyBase {
    apiSecretKey: shared.SchemeApiSecretKey;
}
export declare class GetPotTransactionsRequest extends SpeakeasyBase {
    pathParams: GetPotTransactionsPathParams;
    queryParams: GetPotTransactionsQueryParams;
    headers: GetPotTransactionsHeaders;
    security: GetPotTransactionsSecurity;
}
export declare class GetPotTransactionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getPotTransactions200ApplicationJSONAny?: any;
    getPotTransactions401ApplicationJSONAny?: any;
    getPotTransactions403ApplicationJSONAny?: any;
    getPotTransactions404ApplicationJSONAny?: any;
    getPotTransactions429ApplicationJSONAny?: any;
    getPotTransactions500ApplicationJSONAny?: any;
}
