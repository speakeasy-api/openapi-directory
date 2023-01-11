import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WebinarRegistrantStatusPathParams extends SpeakeasyBase {
    webinarId: number;
}
export declare class WebinarRegistrantStatusQueryParams extends SpeakeasyBase {
    occurrenceId?: string;
}
export declare enum WebinarRegistrantStatusApplicationJsonActionEnum {
    Approve = "approve",
    Cancel = "cancel",
    Deny = "deny"
}
export declare class WebinarRegistrantStatusApplicationJsonRegistrants extends SpeakeasyBase {
    email?: string;
    id?: string;
}
export declare class WebinarRegistrantStatusApplicationJson extends SpeakeasyBase {
    action: WebinarRegistrantStatusApplicationJsonActionEnum;
    registrants?: WebinarRegistrantStatusApplicationJsonRegistrants[];
}
export declare enum WebinarRegistrantStatusMultipartFormDataActionEnum {
    Approve = "approve",
    Cancel = "cancel",
    Deny = "deny"
}
export declare class WebinarRegistrantStatusMultipartFormDataRegistrants extends SpeakeasyBase {
    email?: string;
    id?: string;
}
export declare class WebinarRegistrantStatusMultipartFormData1 extends SpeakeasyBase {
    action: WebinarRegistrantStatusMultipartFormDataActionEnum;
    registrants?: WebinarRegistrantStatusMultipartFormDataRegistrants[];
}
export declare class WebinarRegistrantStatusRequests extends SpeakeasyBase {
    object?: WebinarRegistrantStatusApplicationJson;
    object1?: WebinarRegistrantStatusMultipartFormData1;
}
export declare class WebinarRegistrantStatusSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class WebinarRegistrantStatusRequest extends SpeakeasyBase {
    pathParams: WebinarRegistrantStatusPathParams;
    queryParams: WebinarRegistrantStatusQueryParams;
    request: WebinarRegistrantStatusRequests;
    security: WebinarRegistrantStatusSecurity;
}
export declare class WebinarRegistrantStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
