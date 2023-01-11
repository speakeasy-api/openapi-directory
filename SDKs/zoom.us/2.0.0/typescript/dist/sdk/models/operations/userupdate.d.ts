import { SpeakeasyBase } from "../../../internal/utils";
export declare class UserUpdatePathParams extends SpeakeasyBase {
    userId: string;
}
export declare enum UserUpdateLoginTypeEnum {
    Zero = "0",
    One = "1",
    NinetyNine = "99",
    OneHundred = "100",
    OneHundredAndOne = "101"
}
export declare class UserUpdateQueryParams extends SpeakeasyBase {
    loginType?: UserUpdateLoginTypeEnum;
}
/**
 * Custom attribute(s) of the user.
**/
export declare class UserUpdateApplicationJsonCustomAttributes extends SpeakeasyBase {
    key?: string;
    name?: string;
    value?: string;
}
export declare class UserUpdateApplicationJsonPhoneNumbers extends SpeakeasyBase {
    code?: string;
    country?: string;
    number?: string;
}
/**
 * The user update object represents a user on Zoom.
**/
export declare class UserUpdateApplicationJson extends SpeakeasyBase {
    cmsUserId?: string;
    company?: string;
    customAttributes?: UserUpdateApplicationJsonCustomAttributes;
    dept?: string;
    firstName?: string;
    groupId?: string;
    hostKey?: string;
    jobTitle?: string;
    language?: string;
    lastName?: string;
    location?: string;
    manager?: string;
    phoneCountry?: string;
    phoneNumber?: string;
    phoneNumbers?: UserUpdateApplicationJsonPhoneNumbers;
    pmi?: number;
    timezone?: string;
    type?: number;
    usePmi?: boolean;
    vanityName?: string;
}
/**
 * Custom attribute(s) of the user.
**/
export declare class UserUpdateMultipartFormDataCustomAttributes extends SpeakeasyBase {
    key?: string;
    name?: string;
    value?: string;
}
export declare class UserUpdateMultipartFormDataPhoneNumbers extends SpeakeasyBase {
    code?: string;
    country?: string;
    number?: string;
}
/**
 * The user update object represents a user on Zoom.
**/
export declare class UserUpdateMultipartFormData extends SpeakeasyBase {
    cmsUserId?: string;
    company?: string;
    customAttributes?: UserUpdateMultipartFormDataCustomAttributes;
    dept?: string;
    firstName?: string;
    groupId?: string;
    hostKey?: string;
    jobTitle?: string;
    language?: string;
    lastName?: string;
    location?: string;
    manager?: string;
    phoneCountry?: string;
    phoneNumber?: string;
    phoneNumbers?: UserUpdateMultipartFormDataPhoneNumbers;
    pmi?: number;
    timezone?: string;
    type?: number;
    usePmi?: boolean;
    vanityName?: string;
}
export declare class UserUpdateRequests extends SpeakeasyBase {
    object?: UserUpdateApplicationJson;
    object1?: UserUpdateMultipartFormData;
}
export declare class UserUpdateRequest extends SpeakeasyBase {
    pathParams: UserUpdatePathParams;
    queryParams: UserUpdateQueryParams;
    request: UserUpdateRequests;
}
export declare class UserUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
