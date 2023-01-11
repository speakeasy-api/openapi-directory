import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PhoneUserRecordingsPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class PhoneUserRecordingsQueryParams extends SpeakeasyBase {
    from?: Date;
    nextPageToken?: string;
    pageSize?: number;
    to: Date;
}
export declare class PhoneUserRecordingsSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class PhoneUserRecordings200ApplicationJsonRecordings extends SpeakeasyBase {
    calleeName?: string;
    calleeNumber?: string;
    calleeNumberType?: string;
    callerName?: string;
    callerNumber?: string;
    callerNumberType?: string;
    dateTime?: string;
    direction?: string;
    downloadUrl?: string;
    duration?: string;
    id?: string;
}
/**
 * Phone User Recordings
**/
export declare class PhoneUserRecordings200ApplicationJson extends SpeakeasyBase {
    from?: Date;
    nextPageToken?: string;
    pageCount?: number;
    pageSize?: number;
    recordings?: PhoneUserRecordings200ApplicationJsonRecordings[];
    to?: Date;
    totalRecords?: number;
}
export declare class PhoneUserRecordingsRequest extends SpeakeasyBase {
    pathParams: PhoneUserRecordingsPathParams;
    queryParams: PhoneUserRecordingsQueryParams;
    security: PhoneUserRecordingsSecurity;
}
export declare class PhoneUserRecordingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    phoneUserRecordings200ApplicationJSONObject?: PhoneUserRecordings200ApplicationJson;
}
