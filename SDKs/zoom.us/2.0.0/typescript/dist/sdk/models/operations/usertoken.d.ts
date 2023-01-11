import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UserTokenPathParams extends SpeakeasyBase {
    userId: string;
}
export declare enum UserTokenTypeEnum {
    Token = "token",
    Zak = "zak"
}
export declare class UserTokenQueryParams extends SpeakeasyBase {
    ttl?: number;
    type?: UserTokenTypeEnum;
}
export declare class UserTokenSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class UserToken200ApplicationJson extends SpeakeasyBase {
    token?: string;
}
export declare class UserTokenRequest extends SpeakeasyBase {
    pathParams: UserTokenPathParams;
    queryParams: UserTokenQueryParams;
    security: UserTokenSecurity;
}
export declare class UserTokenResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    userToken200ApplicationJSONObject?: UserToken200ApplicationJson;
}
