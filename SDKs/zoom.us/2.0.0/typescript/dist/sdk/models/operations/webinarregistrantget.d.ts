import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WebinarRegistrantGetPathParams extends SpeakeasyBase {
    registrantId: string;
    webinarId: number;
}
export declare class WebinarRegistrantGetQueryParams extends SpeakeasyBase {
    occurrenceId?: string;
}
export declare class WebinarRegistrantGetSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
/**
 * Custom Question.
**/
export declare class WebinarRegistrantGetWebianrRegistrantCustomQuestions extends SpeakeasyBase {
    title?: string;
    value?: string;
}
/**
 * Registrant base object.
**/
export declare class WebinarRegistrantGetWebianrRegistrant extends SpeakeasyBase {
    address?: string;
    city?: string;
    comments?: string;
    country?: string;
    createTime?: Date;
    customQuestions?: WebinarRegistrantGetWebianrRegistrantCustomQuestions[];
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
export declare class WebinarRegistrantGetRequest extends SpeakeasyBase {
    pathParams: WebinarRegistrantGetPathParams;
    queryParams: WebinarRegistrantGetQueryParams;
    security: WebinarRegistrantGetSecurity;
}
export declare class WebinarRegistrantGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    webianrRegistrant?: WebinarRegistrantGetWebianrRegistrant;
}
