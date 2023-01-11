import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WebinarPanelistDeletePathParams extends SpeakeasyBase {
    panelistId: number;
    webinarId: number;
}
export declare class WebinarPanelistDeleteSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class WebinarPanelistDeleteRequest extends SpeakeasyBase {
    pathParams: WebinarPanelistDeletePathParams;
    security: WebinarPanelistDeleteSecurity;
}
export declare class WebinarPanelistDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
