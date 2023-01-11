import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListPhoneUsersQueryParams extends SpeakeasyBase {
    nextPageToken?: string;
    pageSize?: number;
    siteId?: string;
}
export declare class ListPhoneUsersSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class ListPhoneUsers200ApplicationJsonUsersCallingPlans extends SpeakeasyBase {
    name?: string;
    type?: string;
}
export declare class ListPhoneUsers200ApplicationJsonUsersSite extends SpeakeasyBase {
    id?: string;
    name?: string;
}
export declare class ListPhoneUsers200ApplicationJsonUsers extends SpeakeasyBase {
    callingPlans?: ListPhoneUsers200ApplicationJsonUsersCallingPlans[];
    email?: string;
    extensionNumber?: number;
    id?: string;
    name?: string;
    phoneUserId?: string;
    site?: ListPhoneUsers200ApplicationJsonUsersSite;
    status?: string;
}
export declare class ListPhoneUsers200ApplicationJson extends SpeakeasyBase {
    nextPageToken?: string;
    pageSize?: number;
    totalRecords?: number;
    users?: ListPhoneUsers200ApplicationJsonUsers[];
}
export declare class ListPhoneUsersRequest extends SpeakeasyBase {
    queryParams: ListPhoneUsersQueryParams;
    security: ListPhoneUsersSecurity;
}
export declare class ListPhoneUsersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    listPhoneUsers200ApplicationJSONObject?: ListPhoneUsers200ApplicationJson;
}
