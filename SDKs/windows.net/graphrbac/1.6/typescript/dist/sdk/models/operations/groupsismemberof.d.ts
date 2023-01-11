import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GroupsIsMemberOfPathParams extends SpeakeasyBase {
    tenantID: string;
}
export declare class GroupsIsMemberOfQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class GroupsIsMemberOfRequests extends SpeakeasyBase {
    checkGroupMembershipParameters?: Record<string, Record<string, any>>;
    checkGroupMembershipParameters1?: Record<string, Record<string, any>>;
}
export declare class GroupsIsMemberOfRequest extends SpeakeasyBase {
    pathParams: GroupsIsMemberOfPathParams;
    queryParams: GroupsIsMemberOfQueryParams;
    request: GroupsIsMemberOfRequests;
}
export declare class GroupsIsMemberOfResponse extends SpeakeasyBase {
    checkGroupMembershipResult?: Record<string, Record<string, any>>;
    contentType: string;
    graphError?: shared.GraphError;
    statusCode: number;
}
