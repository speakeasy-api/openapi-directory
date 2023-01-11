import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WebinarAbsenteesPathParams extends SpeakeasyBase {
    webinarUUID: string;
}
export declare class WebinarAbsenteesQueryParams extends SpeakeasyBase {
    nextPageToken?: string;
    occurrenceId?: string;
    pageSize?: number;
}
export declare class WebinarAbsenteesSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
/**
 * Custom Question.
**/
export declare class WebinarAbsenteesRegistrationListRegistrantsCustomQuestions extends SpeakeasyBase {
    title?: string;
    value?: string;
}
/**
 * Registrant base object.
**/
export declare class WebinarAbsenteesRegistrationListRegistrants extends SpeakeasyBase {
    address?: string;
    city?: string;
    comments?: string;
    country?: string;
    createTime?: Date;
    customQuestions?: WebinarAbsenteesRegistrationListRegistrantsCustomQuestions[];
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
export declare class WebinarAbsenteesRegistrationList extends SpeakeasyBase {
    nextPageToken?: string;
    pageCount?: number;
    pageNumber?: number;
    pageSize?: number;
    registrants?: WebinarAbsenteesRegistrationListRegistrants[];
    totalRecords?: number;
}
export declare class WebinarAbsenteesRequest extends SpeakeasyBase {
    pathParams: WebinarAbsenteesPathParams;
    queryParams: WebinarAbsenteesQueryParams;
    security: WebinarAbsenteesSecurity;
}
export declare class WebinarAbsenteesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    registrationList?: WebinarAbsenteesRegistrationList;
    statusCode: number;
}
