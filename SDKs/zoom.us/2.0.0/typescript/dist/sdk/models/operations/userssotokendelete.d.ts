import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UserSsoTokenDeletePathParams extends SpeakeasyBase {
    userId: string;
}
export declare class UserSsoTokenDeleteSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class UserSsoTokenDeleteRequest extends SpeakeasyBase {
    pathParams: UserSsoTokenDeletePathParams;
    security: UserSsoTokenDeleteSecurity;
}
export declare class UserSsoTokenDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
