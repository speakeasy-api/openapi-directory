import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WebinarPollDeletePathParams extends SpeakeasyBase {
    pollId: string;
    webinarId: number;
}
export declare class WebinarPollDeleteSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class WebinarPollDeleteRequest extends SpeakeasyBase {
    pathParams: WebinarPollDeletePathParams;
    security: WebinarPollDeleteSecurity;
}
export declare class WebinarPollDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
