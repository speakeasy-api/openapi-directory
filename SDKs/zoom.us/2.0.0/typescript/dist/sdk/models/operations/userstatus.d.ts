import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UserStatusPathParams extends SpeakeasyBase {
    userId: string;
}
export declare enum UserStatusApplicationJsonActionEnum {
    Activate = "activate",
    Deactivate = "deactivate"
}
/**
 * The action.
**/
export declare class UserStatusApplicationJson extends SpeakeasyBase {
    action: UserStatusApplicationJsonActionEnum;
}
export declare enum UserStatusMultipartFormDataActionEnum {
    Activate = "activate",
    Deactivate = "deactivate"
}
/**
 * The action.
**/
export declare class UserStatusMultipartFormData extends SpeakeasyBase {
    action: UserStatusMultipartFormDataActionEnum;
}
export declare class UserStatusRequests extends SpeakeasyBase {
    object?: UserStatusApplicationJson;
    object1?: UserStatusMultipartFormData;
}
export declare class UserStatusSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class UserStatusRequest extends SpeakeasyBase {
    pathParams: UserStatusPathParams;
    request: UserStatusRequests;
    security: UserStatusSecurity;
}
export declare class UserStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
