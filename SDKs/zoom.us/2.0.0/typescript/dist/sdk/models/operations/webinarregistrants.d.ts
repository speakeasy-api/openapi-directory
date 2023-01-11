import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WebinarRegistrantsPathParams extends SpeakeasyBase {
    webinarId: number;
}
export declare enum WebinarRegistrantsStatusEnum {
    Pending = "pending",
    Approved = "approved",
    Denied = "denied"
}
export declare class WebinarRegistrantsQueryParams extends SpeakeasyBase {
    nextPageToken?: string;
    occurrenceId?: string;
    pageNumber?: number;
    pageSize?: number;
    status?: WebinarRegistrantsStatusEnum;
    trackingSourceId?: string;
}
export declare class WebinarRegistrantsSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
/**
 * Custom Question.
**/
export declare class WebinarRegistrantsRegistrationListRegistrantsCustomQuestions extends SpeakeasyBase {
    title?: string;
    value?: string;
}
/**
 * Registrant base object.
**/
export declare class WebinarRegistrantsRegistrationListRegistrants extends SpeakeasyBase {
    address?: string;
    city?: string;
    comments?: string;
    country?: string;
    createTime?: Date;
    customQuestions?: WebinarRegistrantsRegistrationListRegistrantsCustomQuestions[];
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
export declare class WebinarRegistrantsRegistrationList extends SpeakeasyBase {
    nextPageToken?: string;
    pageCount?: number;
    pageNumber?: number;
    pageSize?: number;
    registrants?: WebinarRegistrantsRegistrationListRegistrants[];
    totalRecords?: number;
}
export declare class WebinarRegistrantsRequest extends SpeakeasyBase {
    pathParams: WebinarRegistrantsPathParams;
    queryParams: WebinarRegistrantsQueryParams;
    security: WebinarRegistrantsSecurity;
}
export declare class WebinarRegistrantsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    registrationList?: WebinarRegistrantsRegistrationList;
    statusCode: number;
}
