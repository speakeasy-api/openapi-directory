import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GroupMembersPathParams extends SpeakeasyBase {
    groupId: string;
}
export declare class GroupMembersQueryParams extends SpeakeasyBase {
    nextPageToken?: string;
    pageNumber?: number;
    pageSize?: number;
}
export declare class GroupMembersSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class GroupMembers200ApplicationJsonMembers extends SpeakeasyBase {
    email?: string;
    firstName?: string;
    id?: string;
    lastName?: string;
    type?: number;
}
export declare class GroupMembers200ApplicationJson extends SpeakeasyBase {
    members?: GroupMembers200ApplicationJsonMembers[];
    nextPageToken?: string;
    pageCount?: number;
    pageNumber?: number;
    pageSize?: number;
    totalRecords?: number;
}
export declare class GroupMembersRequest extends SpeakeasyBase {
    pathParams: GroupMembersPathParams;
    queryParams: GroupMembersQueryParams;
    security: GroupMembersSecurity;
}
export declare class GroupMembersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    groupMembers200ApplicationJSONObject?: GroupMembers200ApplicationJson;
}
