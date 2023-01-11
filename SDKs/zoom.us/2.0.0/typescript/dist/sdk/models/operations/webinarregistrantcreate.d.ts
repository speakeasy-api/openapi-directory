import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WebinarRegistrantCreatePathParams extends SpeakeasyBase {
    webinarId: number;
}
export declare class WebinarRegistrantCreateQueryParams extends SpeakeasyBase {
    occurrenceIds?: string;
}
/**
 * Custom Question.
**/
export declare class WebinarRegistrantCreateApplicationJsonCustomQuestions extends SpeakeasyBase {
    title?: string;
    value?: string;
}
/**
 * Registrant base object.
**/
export declare class WebinarRegistrantCreateApplicationJson extends SpeakeasyBase {
    address?: string;
    city?: string;
    comments?: string;
    country?: string;
    customQuestions?: WebinarRegistrantCreateApplicationJsonCustomQuestions[];
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
export declare class WebinarRegistrantCreateMultipartFormDataCustomQuestions extends SpeakeasyBase {
    title?: string;
    value?: string;
}
/**
 * Registrant base object.
**/
export declare class WebinarRegistrantCreateMultipartFormData1 extends SpeakeasyBase {
    address?: string;
    city?: string;
    comments?: string;
    country?: string;
    customQuestions?: WebinarRegistrantCreateMultipartFormDataCustomQuestions[];
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
export declare class WebinarRegistrantCreateRequests extends SpeakeasyBase {
    object?: WebinarRegistrantCreateApplicationJson;
    object1?: WebinarRegistrantCreateMultipartFormData1;
}
export declare class WebinarRegistrantCreateSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class WebinarRegistrantCreate201ApplicationJson extends SpeakeasyBase {
    id?: string;
    joinUrl?: string;
    registrantId?: string;
    startTime?: Date;
    topic?: string;
}
export declare class WebinarRegistrantCreateRequest extends SpeakeasyBase {
    pathParams: WebinarRegistrantCreatePathParams;
    queryParams: WebinarRegistrantCreateQueryParams;
    request: WebinarRegistrantCreateRequests;
    security: WebinarRegistrantCreateSecurity;
}
export declare class WebinarRegistrantCreateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    webinarRegistrantCreate201ApplicationJSONObject?: WebinarRegistrantCreate201ApplicationJson;
}
