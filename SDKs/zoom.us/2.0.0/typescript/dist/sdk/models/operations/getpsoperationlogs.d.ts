import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPsOperationLogsQueryParams extends SpeakeasyBase {
    categoryType?: string;
    from?: string;
    nextPageToken?: string;
    pageSize?: number;
    to?: string;
}
export declare class GetPsOperationLogs200ApplicationJsonOperationLogs extends SpeakeasyBase {
    action?: string;
    categoryType?: string;
    operationDetail?: string;
    operator?: string;
    time?: Date;
}
/**
 * Pagination object.
**/
export declare class GetPsOperationLogs200ApplicationJson extends SpeakeasyBase {
    nextPageToken?: string;
    operationLogs?: GetPsOperationLogs200ApplicationJsonOperationLogs[];
    pageSize?: number;
}
export declare class GetPsOperationLogsRequest extends SpeakeasyBase {
    queryParams: GetPsOperationLogsQueryParams;
}
export declare class GetPsOperationLogsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    getPSOperationLogs200ApplicationJSONObject?: GetPsOperationLogs200ApplicationJson;
}
