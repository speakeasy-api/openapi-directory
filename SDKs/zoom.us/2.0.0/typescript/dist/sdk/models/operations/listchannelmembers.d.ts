import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListChannelMembersPathParams extends SpeakeasyBase {
    channelId: string;
    userId: string;
}
export declare class ListChannelMembersQueryParams extends SpeakeasyBase {
    nextPageToken?: string;
    pageSize?: number;
}
export declare class ListChannelMembersSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare enum ListChannelMembers200ApplicationJsonMembersRoleEnum {
    Admin = "admin",
    Owner = "owner",
    Member = "member"
}
export declare class ListChannelMembers200ApplicationJsonMembers extends SpeakeasyBase {
    email?: string;
    firstName?: string;
    id?: string;
    lastName?: string;
    role?: ListChannelMembers200ApplicationJsonMembersRoleEnum;
}
export declare class ListChannelMembers200ApplicationJson extends SpeakeasyBase {
    members?: ListChannelMembers200ApplicationJsonMembers[];
    nextPageToken?: string;
    pageSize?: number;
    totalRecords?: number;
}
export declare class ListChannelMembersRequest extends SpeakeasyBase {
    pathParams: ListChannelMembersPathParams;
    queryParams: ListChannelMembersQueryParams;
    security: ListChannelMembersSecurity;
}
export declare class ListChannelMembersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    listChannelMembers200ApplicationJSONObject?: ListChannelMembers200ApplicationJson;
}
