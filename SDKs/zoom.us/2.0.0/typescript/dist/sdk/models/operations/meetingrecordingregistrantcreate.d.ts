import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MeetingRecordingRegistrantCreatePathParams extends SpeakeasyBase {
    meetingId: number;
}
/**
 * Custom Question.
**/
export declare class MeetingRecordingRegistrantCreateApplicationJsonCustomQuestions extends SpeakeasyBase {
    title?: string;
    value?: string;
}
/**
 * Registrant base object.
**/
export declare class MeetingRecordingRegistrantCreateApplicationJson extends SpeakeasyBase {
    address?: string;
    city?: string;
    comments?: string;
    country?: string;
    customQuestions?: MeetingRecordingRegistrantCreateApplicationJsonCustomQuestions[];
    email: string;
    firstName: string;
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
 * Custom Question.
**/
export declare class MeetingRecordingRegistrantCreateMultipartFormDataCustomQuestions extends SpeakeasyBase {
    title?: string;
    value?: string;
}
/**
 * Registrant base object.
**/
export declare class MeetingRecordingRegistrantCreateMultipartFormData1 extends SpeakeasyBase {
    address?: string;
    city?: string;
    comments?: string;
    country?: string;
    customQuestions?: MeetingRecordingRegistrantCreateMultipartFormDataCustomQuestions[];
    email: string;
    firstName: string;
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
export declare class MeetingRecordingRegistrantCreateRequests extends SpeakeasyBase {
    object?: MeetingRecordingRegistrantCreateApplicationJson;
    object1?: MeetingRecordingRegistrantCreateMultipartFormData1;
}
export declare class MeetingRecordingRegistrantCreateSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class MeetingRecordingRegistrantCreate201ApplicationJson extends SpeakeasyBase {
    id?: number;
    registrantId?: string;
    shareUrl?: string;
    topic?: string;
}
export declare class MeetingRecordingRegistrantCreateRequest extends SpeakeasyBase {
    pathParams: MeetingRecordingRegistrantCreatePathParams;
    request: MeetingRecordingRegistrantCreateRequests;
    security: MeetingRecordingRegistrantCreateSecurity;
}
export declare class MeetingRecordingRegistrantCreateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    meetingRecordingRegistrantCreate201ApplicationJSONObject?: MeetingRecordingRegistrantCreate201ApplicationJson;
}
