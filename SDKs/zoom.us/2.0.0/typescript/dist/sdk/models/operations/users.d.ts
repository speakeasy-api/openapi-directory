import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UsersStatusEnum {
    Active = "active",
    Inactive = "inactive",
    Pending = "pending"
}
export declare class UsersQueryParams extends SpeakeasyBase {
    includeFields?: string;
    nextPageToken?: string;
    pageNumber?: string;
    pageSize?: number;
    roleId?: string;
    status?: UsersStatusEnum;
}
export declare class UsersSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class Users200ApplicationJsonUsersCustomAttributes extends SpeakeasyBase {
    key?: string;
    name?: string;
    value?: string;
}
export declare class Users200ApplicationJsonUsers extends SpeakeasyBase {
    createdAt?: Date;
    customAttributes?: Users200ApplicationJsonUsersCustomAttributes[];
    dept?: string;
    email: string;
    firstName?: string;
    groupIds?: string[];
    hostKey?: string;
    id?: string;
    imGroupIds?: string[];
    lastClientVersion?: string;
    lastLoginTime?: Date;
    lastName?: string;
    planUnitedType?: string;
    pmi?: number;
    roleId?: string;
    status?: string;
    timezone?: string;
    type: number;
    verified?: number;
}
export declare class Users200ApplicationJson extends SpeakeasyBase {
    nextPageToken?: string;
    pageCount?: number;
    pageNumber?: number;
    pageSize?: number;
    totalRecords?: number;
    users?: Users200ApplicationJsonUsers[];
}
export declare class UsersRequest extends SpeakeasyBase {
    queryParams: UsersQueryParams;
    security: UsersSecurity;
}
export declare class UsersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    users200ApplicationJSONObject?: Users200ApplicationJson;
}
