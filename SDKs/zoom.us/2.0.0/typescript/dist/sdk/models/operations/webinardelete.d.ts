import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WebinarDeletePathParams extends SpeakeasyBase {
    webinarId: number;
}
export declare class WebinarDeleteQueryParams extends SpeakeasyBase {
    cancelWebinarReminder?: string;
    occurrenceId?: string;
}
export declare class WebinarDeleteSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class WebinarDeleteRequest extends SpeakeasyBase {
    pathParams: WebinarDeletePathParams;
    queryParams: WebinarDeleteQueryParams;
    security: WebinarDeleteSecurity;
}
export declare class WebinarDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
