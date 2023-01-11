import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ImGroupMembersPathParams extends SpeakeasyBase {
    groupId: string;
}
export declare class ImGroupMembersQueryParams extends SpeakeasyBase {
    nextPageToken?: string;
    pageNumber?: number;
    pageSize?: number;
}
export declare class ImGroupMembersSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
/**
 * Group member object.
**/
export declare class ImGroupMembersGroupMemberListMembers extends SpeakeasyBase {
    email?: string;
    firstName?: string;
    id?: string;
    lastName?: string;
    type?: number;
}
/**
 * Pagination Object.
**/
export declare class ImGroupMembersGroupMemberList extends SpeakeasyBase {
    members?: ImGroupMembersGroupMemberListMembers[];
    nextPageToken?: string;
    pageCount?: number;
    pageNumber?: number;
    pageSize?: number;
    totalRecords?: number;
}
export declare class ImGroupMembersRequest extends SpeakeasyBase {
    pathParams: ImGroupMembersPathParams;
    queryParams: ImGroupMembersQueryParams;
    security: ImGroupMembersSecurity;
}
export declare class ImGroupMembersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    groupMemberList?: ImGroupMembersGroupMemberList;
    statusCode: number;
}
