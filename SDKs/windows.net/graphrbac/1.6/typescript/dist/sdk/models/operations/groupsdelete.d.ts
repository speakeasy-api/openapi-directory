import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GroupsDeletePathParams extends SpeakeasyBase {
    objectId: string;
    tenantID: string;
}
export declare class GroupsDeleteQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class GroupsDeleteRequest extends SpeakeasyBase {
    pathParams: GroupsDeletePathParams;
    queryParams: GroupsDeleteQueryParams;
}
export declare class GroupsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    graphError?: shared.GraphError;
    statusCode: number;
}
