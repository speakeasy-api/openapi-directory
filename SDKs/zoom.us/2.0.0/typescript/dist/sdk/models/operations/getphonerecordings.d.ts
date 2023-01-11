import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPhoneRecordingsQueryParams extends SpeakeasyBase {
    from?: string;
    nextPageToken?: string;
    ownerType?: string;
    pageSize?: number;
    recordingType?: string;
    siteId?: string;
    to?: string;
}
export declare class GetPhoneRecordingsSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare enum GetPhoneRecordings200ApplicationJsonRecordingsCalleeNumberTypeEnum {
    One = "1",
    Two = "2"
}
export declare enum GetPhoneRecordings200ApplicationJsonRecordingsCallerNumberTypeEnum {
    One = "1",
    Two = "2"
}
export declare enum GetPhoneRecordings200ApplicationJsonRecordingsDirectionEnum {
    Inbound = "inbound",
    Outbound = "outbound"
}
export declare enum GetPhoneRecordings200ApplicationJsonRecordingsOwnerTypeEnum {
    User = "user",
    CallQueue = "call queue"
}
/**
 * The owner of the recording.
**/
export declare class GetPhoneRecordings200ApplicationJsonRecordingsOwner extends SpeakeasyBase {
    extensionNumber?: string;
    id?: string;
    name?: string;
    type?: GetPhoneRecordings200ApplicationJsonRecordingsOwnerTypeEnum;
}
export declare class GetPhoneRecordings200ApplicationJsonRecordingsSite extends SpeakeasyBase {
    id?: string;
    name?: string;
}
export declare class GetPhoneRecordings200ApplicationJsonRecordings extends SpeakeasyBase {
    calleeName?: string;
    calleeNumber?: string;
    calleeNumberType?: GetPhoneRecordings200ApplicationJsonRecordingsCalleeNumberTypeEnum;
    callerName?: string;
    callerNumber?: string;
    callerNumberType?: GetPhoneRecordings200ApplicationJsonRecordingsCallerNumberTypeEnum;
    dateTime?: Date;
    direction?: GetPhoneRecordings200ApplicationJsonRecordingsDirectionEnum;
    downloadUrl?: string;
    duration?: number;
    id?: string;
    owner?: GetPhoneRecordings200ApplicationJsonRecordingsOwner;
    recordingType?: string;
    site?: GetPhoneRecordings200ApplicationJsonRecordingsSite;
}
export declare class GetPhoneRecordings200ApplicationJson extends SpeakeasyBase {
    nextPageToken?: string;
    pageSize?: number;
    recordings?: GetPhoneRecordings200ApplicationJsonRecordings[];
    totalRecords?: number;
}
export declare class GetPhoneRecordingsRequest extends SpeakeasyBase {
    queryParams: GetPhoneRecordingsQueryParams;
    security: GetPhoneRecordingsSecurity;
}
export declare class GetPhoneRecordingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    getPhoneRecordings200ApplicationJSONObject?: GetPhoneRecordings200ApplicationJson;
    getPhoneRecordings400ApplicationJSONAny?: any;
}
