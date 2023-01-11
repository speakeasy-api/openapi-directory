import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MeetingsPathParams extends SpeakeasyBase {
    userId: string;
}
export declare enum MeetingsTypeEnum {
    Scheduled = "scheduled",
    Live = "live",
    Upcoming = "upcoming"
}
export declare class MeetingsQueryParams extends SpeakeasyBase {
    nextPageToken?: string;
    pageNumber?: string;
    pageSize?: number;
    type?: MeetingsTypeEnum;
}
export declare class MeetingsSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class MeetingsGroupListMeetings extends SpeakeasyBase {
    agenda?: string;
    createdAt?: Date;
    duration?: number;
    hostId?: string;
    id?: number;
    joinUrl?: string;
    pmi?: string;
    startTime?: Date;
    timezone?: string;
    topic?: string;
    type?: number;
    uuid?: string;
}
/**
 * Pagination Object.
**/
export declare class MeetingsGroupList extends SpeakeasyBase {
    meetings?: MeetingsGroupListMeetings[];
    nextPageToken?: string;
    pageCount?: number;
    pageNumber?: number;
    pageSize?: number;
    totalRecords?: number;
}
export declare class MeetingsRequest extends SpeakeasyBase {
    pathParams: MeetingsPathParams;
    queryParams: MeetingsQueryParams;
    security: MeetingsSecurity;
}
export declare class MeetingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    groupList?: MeetingsGroupList;
    statusCode: number;
}
