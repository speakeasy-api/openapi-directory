import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MeetingRecordingRegistrantsPathParams extends SpeakeasyBase {
    meetingId: number;
}
export declare enum MeetingRecordingRegistrantsStatusEnum {
    Pending = "pending",
    Approved = "approved",
    Denied = "denied"
}
export declare class MeetingRecordingRegistrantsQueryParams extends SpeakeasyBase {
    nextPageToken?: string;
    pageNumber?: number;
    pageSize?: number;
    status?: MeetingRecordingRegistrantsStatusEnum;
}
export declare class MeetingRecordingRegistrantsSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
/**
 * Custom Question.
**/
export declare class MeetingRecordingRegistrantsRecordingRegistrationListRegistrantsCustomQuestions extends SpeakeasyBase {
    title?: string;
    value?: string;
}
/**
 * Registrant base object.
**/
export declare class MeetingRecordingRegistrantsRecordingRegistrationListRegistrants extends SpeakeasyBase {
    address?: string;
    city?: string;
    comments?: string;
    country?: string;
    customQuestions?: MeetingRecordingRegistrantsRecordingRegistrationListRegistrantsCustomQuestions[];
    email: string;
    firstName: string;
    id?: string;
    industry?: string;
    jobTitle?: string;
    lastName?: string;
    noOfEmployees?: string;
    org?: string;
    phone?: string;
    purchasingTimeFrame?: string;
    roleInPurchaseProcess?: string;
    state?: string;
    zip?: string;
}
/**
 * Pagination Object.
**/
export declare class MeetingRecordingRegistrantsRecordingRegistrationList extends SpeakeasyBase {
    nextPageToken?: string;
    pageCount?: number;
    pageNumber?: number;
    pageSize?: number;
    registrants?: MeetingRecordingRegistrantsRecordingRegistrationListRegistrants[];
    totalRecords?: number;
}
export declare class MeetingRecordingRegistrantsRequest extends SpeakeasyBase {
    pathParams: MeetingRecordingRegistrantsPathParams;
    queryParams: MeetingRecordingRegistrantsQueryParams;
    security: MeetingRecordingRegistrantsSecurity;
}
export declare class MeetingRecordingRegistrantsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    recordingRegistrationList?: MeetingRecordingRegistrantsRecordingRegistrationList;
    statusCode: number;
}
