import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UserCreateApplicationJsonActionEnum {
    Create = "create",
    AutoCreate = "autoCreate",
    CustCreate = "custCreate",
    SsoCreate = "ssoCreate"
}
export declare class UserCreateApplicationJsonUserInfo extends SpeakeasyBase {
    email: string;
    firstName?: string;
    lastName?: string;
    password?: string;
    type: number;
}
export declare class UserCreateApplicationJson extends SpeakeasyBase {
    action: UserCreateApplicationJsonActionEnum;
    userInfo?: UserCreateApplicationJsonUserInfo;
}
export declare enum UserCreateMultipartFormDataActionEnum {
    Create = "create",
    AutoCreate = "autoCreate",
    CustCreate = "custCreate",
    SsoCreate = "ssoCreate"
}
export declare class UserCreateMultipartFormDataUserInfo extends SpeakeasyBase {
    email: string;
    firstName?: string;
    lastName?: string;
    password?: string;
    type: number;
}
export declare class UserCreateMultipartFormData extends SpeakeasyBase {
    action: UserCreateMultipartFormDataActionEnum;
    userInfo?: UserCreateMultipartFormDataUserInfo;
}
export declare class UserCreateRequests extends SpeakeasyBase {
    object?: UserCreateApplicationJson;
    object1?: UserCreateMultipartFormData;
}
export declare class UserCreateSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class UserCreate201ApplicationJson extends SpeakeasyBase {
    email?: string;
    firstName?: string;
    id?: string;
    lastName?: string;
    type?: number;
}
export declare class UserCreateRequest extends SpeakeasyBase {
    request: UserCreateRequests;
    security: UserCreateSecurity;
}
export declare class UserCreateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    userCreate201ApplicationJSONObject?: UserCreate201ApplicationJson;
}
