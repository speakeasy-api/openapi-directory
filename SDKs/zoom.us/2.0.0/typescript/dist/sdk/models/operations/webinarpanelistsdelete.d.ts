import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WebinarPanelistsDeletePathParams extends SpeakeasyBase {
    webinarId: number;
}
export declare class WebinarPanelistsDeleteSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class WebinarPanelistsDeleteRequest extends SpeakeasyBase {
    pathParams: WebinarPanelistsDeletePathParams;
    security: WebinarPanelistsDeleteSecurity;
}
export declare class WebinarPanelistsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
