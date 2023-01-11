import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WebinarPanelistCreatePathParams extends SpeakeasyBase {
    webinarId: number;
}
/**
 * Panelist base object.
**/
export declare class WebinarPanelistCreateApplicationJsonPanelists extends SpeakeasyBase {
    email?: string;
    name?: string;
}
/**
 * Webinar panelist.
**/
export declare class WebinarPanelistCreateApplicationJson extends SpeakeasyBase {
    panelists?: WebinarPanelistCreateApplicationJsonPanelists[];
}
/**
 * Panelist base object.
**/
export declare class WebinarPanelistCreateMultipartFormDataPanelists extends SpeakeasyBase {
    email?: string;
    name?: string;
}
/**
 * Webinar panelist.
**/
export declare class WebinarPanelistCreateMultipartFormData1 extends SpeakeasyBase {
    panelists?: WebinarPanelistCreateMultipartFormDataPanelists[];
}
export declare class WebinarPanelistCreateRequests extends SpeakeasyBase {
    object?: WebinarPanelistCreateApplicationJson;
    object1?: WebinarPanelistCreateMultipartFormData1;
}
export declare class WebinarPanelistCreateSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class WebinarPanelistCreate201ApplicationJson extends SpeakeasyBase {
    id?: string;
    updatedAt?: Date;
}
export declare class WebinarPanelistCreateRequest extends SpeakeasyBase {
    pathParams: WebinarPanelistCreatePathParams;
    request: WebinarPanelistCreateRequests;
    security: WebinarPanelistCreateSecurity;
}
export declare class WebinarPanelistCreateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    webinarPanelistCreate201ApplicationJSONObject?: WebinarPanelistCreate201ApplicationJson;
}
