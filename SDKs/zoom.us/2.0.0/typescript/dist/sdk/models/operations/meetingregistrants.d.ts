import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MeetingRegistrantsPathParams extends SpeakeasyBase {
    meetingId: number;
}
export declare enum MeetingRegistrantsStatusEnum {
    Pending = "pending",
    Approved = "approved",
    Denied = "denied"
}
export declare class MeetingRegistrantsQueryParams extends SpeakeasyBase {
    nextPageToken?: string;
    occurrenceId?: string;
    pageNumber?: number;
    pageSize?: number;
    status?: MeetingRegistrantsStatusEnum;
}
export declare class MeetingRegistrantsSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
/**
 * Custom Question.
**/
export declare class MeetingRegistrantsRegistrationListRegistrantsCustomQuestions extends SpeakeasyBase {
    title?: string;
    value?: string;
}
/**
 * Registrant base object.
**/
export declare class MeetingRegistrantsRegistrationListRegistrants extends SpeakeasyBase {
    address?: string;
    city?: string;
    comments?: string;
    country?: string;
    createTime?: Date;
    customQuestions?: MeetingRegistrantsRegistrationListRegistrantsCustomQuestions[];
    email: string;
    firstName: string;
    id?: string;
    industry?: string;
    jobTitle?: string;
    joinUrl?: string;
    lastName?: string;
    noOfEmployees?: string;
    org?: string;
    phone?: string;
    purchasingTimeFrame?: string;
    roleInPurchaseProcess?: string;
    state?: string;
    status?: string;
    zip?: string;
}
/**
 * Pagination Object.
**/
export declare class MeetingRegistrantsRegistrationList extends SpeakeasyBase {
    nextPageToken?: string;
    pageCount?: number;
    pageNumber?: number;
    pageSize?: number;
    registrants?: MeetingRegistrantsRegistrationListRegistrants[];
    totalRecords?: number;
}
export declare class MeetingRegistrantsRequest extends SpeakeasyBase {
    pathParams: MeetingRegistrantsPathParams;
    queryParams: MeetingRegistrantsQueryParams;
    security: MeetingRegistrantsSecurity;
}
export declare class MeetingRegistrantsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    registrationList?: MeetingRegistrantsRegistrationList;
    statusCode: number;
}
