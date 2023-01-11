import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WebinarStatusPathParams extends SpeakeasyBase {
    webinarId: number;
}
export declare class WebinarStatusRequests extends SpeakeasyBase {
    any?: any;
    any1?: any;
}
export declare class WebinarStatusSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class WebinarStatusRequest extends SpeakeasyBase {
    pathParams: WebinarStatusPathParams;
    request: WebinarStatusRequests;
    security: WebinarStatusSecurity;
}
export declare class WebinarStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
