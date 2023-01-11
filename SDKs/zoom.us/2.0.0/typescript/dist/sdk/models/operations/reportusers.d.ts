import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ReportUsersTypeEnum {
    Active = "active",
    Inactive = "inactive"
}
export declare class ReportUsersQueryParams extends SpeakeasyBase {
    from: Date;
    nextPageToken?: string;
    pageNumber?: number;
    pageSize?: number;
    to: Date;
    type?: ReportUsersTypeEnum;
}
export declare class ReportUsersSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
/**
 * Custom attribute(s) that have been assigned to the user.
**/
export declare class ReportUsers200ApplicationJsonUsersCustomAttributes extends SpeakeasyBase {
    key?: string;
    name?: string;
    value?: string;
}
export declare class ReportUsers200ApplicationJsonUsers extends SpeakeasyBase {
    customAttributes?: ReportUsers200ApplicationJsonUsersCustomAttributes;
    dept?: string;
    email?: string;
    id?: string;
    meetingMinutes?: number;
    meetings?: number;
    participants?: number;
    type?: number;
    userName?: string;
}
export declare class ReportUsers200ApplicationJson extends SpeakeasyBase {
    from?: Date;
    nextPageToken?: string;
    pageCount?: number;
    pageNumber?: number;
    pageSize?: number;
    to?: Date;
    totalMeetingMinutes?: number;
    totalMeetings?: number;
    totalParticipants?: number;
    totalRecords?: number;
    users?: ReportUsers200ApplicationJsonUsers[];
}
export declare class ReportUsersRequest extends SpeakeasyBase {
    queryParams: ReportUsersQueryParams;
    security: ReportUsersSecurity;
}
export declare class ReportUsersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    reportUsers200ApplicationJSONObject?: ReportUsers200ApplicationJson;
}
