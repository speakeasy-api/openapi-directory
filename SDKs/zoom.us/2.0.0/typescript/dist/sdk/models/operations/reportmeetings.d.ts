import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReportMeetingsPathParams extends SpeakeasyBase {
    userId: string;
}
export declare enum ReportMeetingsTypeEnum {
    Past = "past",
    PastOne = "pastOne"
}
export declare class ReportMeetingsQueryParams extends SpeakeasyBase {
    from: Date;
    nextPageToken?: string;
    pageSize?: number;
    to: Date;
    type?: ReportMeetingsTypeEnum;
}
export declare class ReportMeetings200ApplicationJsonMeetingsCustomKeys extends SpeakeasyBase {
    key?: string;
    value?: string;
}
export declare class ReportMeetings200ApplicationJsonMeetings extends SpeakeasyBase {
    customKeys?: ReportMeetings200ApplicationJsonMeetingsCustomKeys[];
    duration?: number;
    endTime?: Date;
    id?: number;
    participantsCount?: number;
    source?: string;
    startTime?: Date;
    topic?: string;
    totalMinutes?: number;
    type?: number;
    userEmail?: string;
    userName?: string;
    uuid?: string;
}
/**
 * Pagination Object.
**/
export declare class ReportMeetings200ApplicationJson extends SpeakeasyBase {
    from?: Date;
    meetings?: ReportMeetings200ApplicationJsonMeetings[];
    nextPageToken?: string;
    pageCount?: number;
    pageNumber?: number;
    pageSize?: number;
    to?: Date;
    totalRecords?: number;
}
export declare class ReportMeetingsRequest extends SpeakeasyBase {
    pathParams: ReportMeetingsPathParams;
    queryParams: ReportMeetingsQueryParams;
}
export declare class ReportMeetingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    reportMeetings200ApplicationJSONObject?: ReportMeetings200ApplicationJson;
}
