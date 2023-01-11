import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AccountCallLogsTimeTypeEnum {
    StartTime = "startTime",
    EndTime = "endTime"
}
export declare class AccountCallLogsQueryParams extends SpeakeasyBase {
    from?: string;
    nextPageToken?: string;
    pageSize?: number;
    path?: string;
    siteId?: string;
    timeType?: AccountCallLogsTimeTypeEnum;
    to?: string;
    type?: string;
}
export declare class AccountCallLogsSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare enum AccountCallLogs200ApplicationJsonCallLogsCallTypeEnum {
    Voip = "voip",
    Pstn = "pstn",
    Tollfree = "tollfree",
    International = "international",
    ContactCenter = "contactCenter"
}
export declare enum AccountCallLogs200ApplicationJsonCallLogsOwnerTypeEnum {
    User = "user",
    CallQueue = "callQueue",
    AutoReceptionist = "autoReceptionist",
    CommonAreaPhone = "commonAreaPhone",
    SharedLineGroup = "sharedLineGroup"
}
export declare class AccountCallLogs200ApplicationJsonCallLogsOwner extends SpeakeasyBase {
    extensionNumber?: number;
    id?: string;
    name?: string;
    type?: AccountCallLogs200ApplicationJsonCallLogsOwnerTypeEnum;
}
export declare enum AccountCallLogs200ApplicationJsonCallLogsRecordingTypeEnum {
    One = "1",
    Two = "2"
}
export declare class AccountCallLogs200ApplicationJsonCallLogsSite extends SpeakeasyBase {
    id?: string;
    name?: string;
}
export declare class AccountCallLogs200ApplicationJsonCallLogs extends SpeakeasyBase {
    answerStartTime?: Date;
    callId?: string;
    callType?: AccountCallLogs200ApplicationJsonCallLogsCallTypeEnum;
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
    id?: string;
    owner?: AccountCallLogs200ApplicationJsonCallLogsOwner;
    path?: string;
    rate?: string;
    recordingId?: string;
    recordingType?: AccountCallLogs200ApplicationJsonCallLogsRecordingTypeEnum;
    result?: string;
    site?: AccountCallLogs200ApplicationJsonCallLogsSite;
    userId?: string;
    waitingTime?: string;
}
/**
 * Account Call Logs
**/
export declare class AccountCallLogs200ApplicationJson extends SpeakeasyBase {
    callLogs?: AccountCallLogs200ApplicationJsonCallLogs[];
    from?: string;
    nextPageToken?: string;
    pageCount?: number;
    pageSize?: number;
    to?: string;
    totalRecords?: number;
}
export declare class AccountCallLogsRequest extends SpeakeasyBase {
    queryParams: AccountCallLogsQueryParams;
    security: AccountCallLogsSecurity;
}
export declare class AccountCallLogsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    accountCallLogs200ApplicationJSONObject?: AccountCallLogs200ApplicationJson;
}
