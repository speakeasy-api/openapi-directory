import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MeetingRegistrantCreatePathParams extends SpeakeasyBase {
    meetingId: number;
}
export declare class MeetingRegistrantCreateQueryParams extends SpeakeasyBase {
    occurrenceIds?: string;
}
/**
 * Custom Question.
**/
export declare class MeetingRegistrantCreateApplicationJsonCustomQuestions extends SpeakeasyBase {
    title?: string;
    value?: string;
}
/**
 * Registrant base object.
**/
export declare class MeetingRegistrantCreateApplicationJson extends SpeakeasyBase {
    address?: string;
    autoApprove?: boolean;
    city?: string;
    comments?: string;
    country?: string;
    customQuestions?: MeetingRegistrantCreateApplicationJsonCustomQuestions[];
    email: string;
    firstName: string;
    industry?: string;
    jobTitle?: string;
    language?: string;
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
 * Custom Question.
**/
export declare class MeetingRegistrantCreateMultipartFormDataCustomQuestions extends SpeakeasyBase {
    title?: string;
    value?: string;
}
/**
 * Registrant base object.
**/
export declare class MeetingRegistrantCreateMultipartFormData1 extends SpeakeasyBase {
    address?: string;
    autoApprove?: boolean;
    city?: string;
    comments?: string;
    country?: string;
    customQuestions?: MeetingRegistrantCreateMultipartFormDataCustomQuestions[];
    email: string;
    firstName: string;
    industry?: string;
    jobTitle?: string;
    language?: string;
    lastName?: string;
    noOfEmployees?: string;
    org?: string;
    phone?: string;
    purchasingTimeFrame?: string;
    roleInPurchaseProcess?: string;
    state?: string;
    zip?: string;
}
export declare class MeetingRegistrantCreateRequests extends SpeakeasyBase {
    object?: MeetingRegistrantCreateApplicationJson;
    object1?: MeetingRegistrantCreateMultipartFormData1;
}
export declare class MeetingRegistrantCreateSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class MeetingRegistrantCreate201ApplicationJson extends SpeakeasyBase {
    id?: number;
    joinUrl?: string;
    registrantId?: string;
    startTime?: string;
    topic?: string;
}
export declare class MeetingRegistrantCreateRequest extends SpeakeasyBase {
    pathParams: MeetingRegistrantCreatePathParams;
    queryParams: MeetingRegistrantCreateQueryParams;
    request: MeetingRegistrantCreateRequests;
    security: MeetingRegistrantCreateSecurity;
}
export declare class MeetingRegistrantCreateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    meetingRegistrantCreate201ApplicationJSONObject?: MeetingRegistrantCreate201ApplicationJson;
}
