import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetCallQueueRecordingsPathParams extends SpeakeasyBase {
    callQueueId: string;
}
export declare class GetCallQueueRecordingsQueryParams extends SpeakeasyBase {
    from?: Date;
    nextPageToken?: string;
    pageSize?: number;
    to?: Date;
}
export declare class GetCallQueueRecordings200ApplicationJsonRecordings extends SpeakeasyBase {
    calleeName?: string;
    calleeNumber?: string;
    calleeNumberType?: string;
    callerName?: string;
    callerNumber?: string;
    callerNumberType?: string;
    dateTime?: Date;
    direction?: string;
    downloadUrl?: string;
    duration?: number;
    id?: string;
}
export declare class GetCallQueueRecordings200ApplicationJson extends SpeakeasyBase {
    from?: string;
    nextPageToken?: string;
    pageSize?: number;
    recordings?: GetCallQueueRecordings200ApplicationJsonRecordings[];
    to?: string;
    totalRecords?: string;
}
export declare class GetCallQueueRecordingsRequest extends SpeakeasyBase {
    pathParams: GetCallQueueRecordingsPathParams;
    queryParams: GetCallQueueRecordingsQueryParams;
}
export declare class GetCallQueueRecordingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    getCallQueueRecordings200ApplicationJSONObject?: GetCallQueueRecordings200ApplicationJson;
}
