import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GroupsListOwnersPathParams extends SpeakeasyBase {
    objectId: string;
    tenantID: string;
}
export declare class GroupsListOwnersQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class GroupsListOwnersRequest extends SpeakeasyBase {
    pathParams: GroupsListOwnersPathParams;
    queryParams: GroupsListOwnersQueryParams;
}
export declare class GroupsListOwnersResponse extends SpeakeasyBase {
    contentType: string;
    directoryObjectListResult?: shared.DirectoryObjectListResult;
    graphError?: shared.GraphError;
    statusCode: number;
}
