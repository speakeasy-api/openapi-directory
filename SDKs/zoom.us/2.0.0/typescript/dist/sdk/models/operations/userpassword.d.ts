import { SpeakeasyBase } from "../../../internal/utils";
export declare class UserPasswordPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class UserPasswordApplicationJson extends SpeakeasyBase {
    password: string;
}
export declare class UserPasswordMultipartFormData extends SpeakeasyBase {
    password: string;
}
export declare class UserPasswordRequests extends SpeakeasyBase {
    object?: UserPasswordApplicationJson;
    object1?: UserPasswordMultipartFormData;
}
export declare class UserPasswordRequest extends SpeakeasyBase {
    pathParams: UserPasswordPathParams;
    request: UserPasswordRequests;
}
export declare class UserPasswordResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
