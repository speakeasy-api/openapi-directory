import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RoleMembersPathParams extends SpeakeasyBase {
    roleId: string;
}
export declare class RoleMembersQueryParams extends SpeakeasyBase {
    nextPageToken?: string;
    pageCount?: string;
    pageNumber?: number;
    pageSize?: number;
}
export declare class RoleMembersSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class RoleMembersRoleMembersListMembers extends SpeakeasyBase {
    department?: string;
    email?: string;
    firstName?: string;
    id?: string;
    lastName?: string;
    type?: number;
}
/**
 * List of a Role Members
**/
export declare class RoleMembersRoleMembersList extends SpeakeasyBase {
    members?: RoleMembersRoleMembersListMembers[];
    nextPageToken?: string;
    pageCount?: number;
    pageNumber?: number;
    pageSize?: number;
    totalRecords?: number;
}
export declare class RoleMembersRequest extends SpeakeasyBase {
    pathParams: RoleMembersPathParams;
    queryParams: RoleMembersQueryParams;
    security: RoleMembersSecurity;
}
export declare class RoleMembersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    roleMembersList?: RoleMembersRoleMembersList;
    statusCode: number;
}
