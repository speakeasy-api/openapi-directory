import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UserSchedulersDeletePathParams extends SpeakeasyBase {
    userId: string;
}
export declare class UserSchedulersDeleteSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class UserSchedulersDeleteRequest extends SpeakeasyBase {
    pathParams: UserSchedulersDeletePathParams;
    security: UserSchedulersDeleteSecurity;
}
export declare class UserSchedulersDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
