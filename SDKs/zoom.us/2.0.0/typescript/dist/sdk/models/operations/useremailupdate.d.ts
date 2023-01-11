import { SpeakeasyBase } from "../../../internal/utils";
export declare class UserEmailUpdatePathParams extends SpeakeasyBase {
    userId: string;
}
export declare class UserEmailUpdateApplicationJson extends SpeakeasyBase {
    email: string;
}
export declare class UserEmailUpdateMultipartFormData extends SpeakeasyBase {
    email: string;
}
export declare class UserEmailUpdateRequests extends SpeakeasyBase {
    object?: UserEmailUpdateApplicationJson;
    object1?: UserEmailUpdateMultipartFormData;
}
export declare class UserEmailUpdateRequest extends SpeakeasyBase {
    pathParams: UserEmailUpdatePathParams;
    request: UserEmailUpdateRequests;
}
export declare class UserEmailUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
