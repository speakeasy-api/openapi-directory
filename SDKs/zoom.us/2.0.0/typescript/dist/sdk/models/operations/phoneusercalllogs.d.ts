import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PhoneUserCallLogsPathParams extends SpeakeasyBase {
    userId: string;
}
export declare enum PhoneUserCallLogsTimeTypeEnum {
    StartTime = "startTime",
    EndTime = "endTime"
}
export declare enum PhoneUserCallLogsTypeEnum {
    All = "all",
    Missed = "missed"
}
export declare class PhoneUserCallLogsQueryParams extends SpeakeasyBase {
    from: Date;
    nextPageToken?: string;
    pageSize?: number;
    phoneNumber?: string;
    timeType?: PhoneUserCallLogsTimeTypeEnum;
    to: Date;
    type?: PhoneUserCallLogsTypeEnum;
}
export declare class PhoneUserCallLogsSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
/**
 * Indicates who accepted the call.
**/
export declare class PhoneUserCallLogs200ApplicationJsonCallLogsAcceptedBy extends SpeakeasyBase {
    extensionNumber?: string;
    location?: string;
    name?: string;
    numberType?: string;
    phoneNumber?: string;
}
/**
 * Indicates where the call was forwarded from.
**/
export declare class PhoneUserCallLogs200ApplicationJsonCallLogsForwardedBy extends SpeakeasyBase {
    extensionNumber?: string;
    location?: string;
    name?: string;
    numberType?: string;
    phoneNumber?: string;
}
/**
 * Indicates who the call was forwarded to.
**/
export declare class PhoneUserCallLogs200ApplicationJsonCallLogsForwardedTo extends SpeakeasyBase {
    extensionNumber?: string;
    location?: string;
    name?: string;
    numberType?: string;
    phoneNumber?: string;
}
export declare class PhoneUserCallLogs200ApplicationJsonCallLogsOutgoingBy extends SpeakeasyBase {
    extensionNumber?: string;
    location?: string;
    name?: string;
    numberType?: string;
    phoneNumber?: string;
}
export declare class PhoneUserCallLogs200ApplicationJsonCallLogsSite extends SpeakeasyBase {
    id?: string;
    name?: string;
}
export declare class PhoneUserCallLogs200ApplicationJsonCallLogs extends SpeakeasyBase {
    acceptedBy?: PhoneUserCallLogs200ApplicationJsonCallLogsAcceptedBy;
    callId?: string;
    calleeName?: string;
    calleeNumber?: string;
    calleeNumberType?: string;
    callerName?: string;
    callerNumber?: string;
    callerNumberType?: string;
    charge?: string;
    clientCode?: string;
    dateTime?: string;
    direction?: string;
    duration?: number;
    forwardedBy?: PhoneUserCallLogs200ApplicationJsonCallLogsForwardedBy;
    forwardedTo?: PhoneUserCallLogs200ApplicationJsonCallLogsForwardedTo;
    hasRecording?: boolean;
    hasVoicemail?: boolean;
    id?: string;
    outgoingBy?: PhoneUserCallLogs200ApplicationJsonCallLogsOutgoingBy;
    path?: string;
    rate?: string;
    recordingType?: string;
    result?: string;
    site?: PhoneUserCallLogs200ApplicationJsonCallLogsSite;
    userId?: string;
    waitingTime?: number;
}
/**
 * Phone User Call Logs
**/
export declare class PhoneUserCallLogs200ApplicationJson extends SpeakeasyBase {
    callLogs?: PhoneUserCallLogs200ApplicationJsonCallLogs[];
    from?: string;
    nextPageToken?: string;
    pageCount?: number;
    pageSize?: number;
    to?: string;
    totalRecords?: number;
}
export declare class PhoneUserCallLogsRequest extends SpeakeasyBase {
    pathParams: PhoneUserCallLogsPathParams;
    queryParams: PhoneUserCallLogsQueryParams;
    security: PhoneUserCallLogsSecurity;
}
export declare class PhoneUserCallLogsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    phoneUserCallLogs200ApplicationJSONObject?: PhoneUserCallLogs200ApplicationJson;
}
