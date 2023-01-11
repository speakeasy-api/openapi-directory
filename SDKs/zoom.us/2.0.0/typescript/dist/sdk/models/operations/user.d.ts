import { SpeakeasyBase } from "../../../internal/utils";
export declare class UserPathParams extends SpeakeasyBase {
    userId: string;
}
export declare enum UserLoginTypeEnum {
    Zero = "0",
    One = "1",
    NinetyNine = "99",
    OneHundred = "100",
    OneHundredAndOne = "101"
}
export declare class UserQueryParams extends SpeakeasyBase {
    loginType?: UserLoginTypeEnum;
}
/**
 * Custom attribute(s) that have been assigned to the user.
**/
export declare class User200ApplicationJsonCustomAttributes extends SpeakeasyBase {
    key?: string;
    name?: string;
    value?: string;
}
export declare class User200ApplicationJsonPhoneNumbers extends SpeakeasyBase {
    code?: string;
    country?: string;
    number?: string;
    verified?: boolean;
}
export declare enum User200ApplicationJsonStatusEnum {
    Pending = "pending",
    Active = "active",
    Inactive = "inactive"
}
/**
 * The user object represents a specific user on Zoom.
**/
export declare class User200ApplicationJson extends SpeakeasyBase {
    accountId?: string;
    cmsUserId?: string;
    company?: string;
    createdAt?: Date;
    customAttributes?: User200ApplicationJsonCustomAttributes;
    dept?: string;
    email: string;
    firstName?: string;
    groupIds?: string[];
    hostKey?: string;
    id?: string;
    imGroupIds?: string[];
    jid?: string;
    jobTitle?: string;
    language?: string;
    lastClientVersion?: string;
    lastLoginTime?: Date;
    lastName?: string;
    location?: string;
    loginType?: number;
    manager?: string;
    personalMeetingUrl?: string;
    phoneCountry?: string;
    phoneNumber?: string;
    phoneNumbers?: User200ApplicationJsonPhoneNumbers;
    picUrl?: string;
    planUnitedType?: string;
    pmi?: number;
    roleId?: string;
    roleName?: string;
    status?: User200ApplicationJsonStatusEnum;
    timezone?: string;
    type: number;
    usePmi?: boolean;
    vanityUrl?: string;
    verified?: number;
}
export declare class UserRequest extends SpeakeasyBase {
    pathParams: UserPathParams;
    queryParams: UserQueryParams;
}
export declare class UserResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    user200ApplicationJSONObject?: User200ApplicationJson;
}
