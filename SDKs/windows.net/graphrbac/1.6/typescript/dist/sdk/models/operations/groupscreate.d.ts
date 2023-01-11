import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GroupsCreatePathParams extends SpeakeasyBase {
    tenantID: string;
}
export declare class GroupsCreateQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class GroupsCreateRequests extends SpeakeasyBase {
    groupCreateParameters?: Record<string, Record<string, any>>;
    groupCreateParameters1?: Record<string, Record<string, any>>;
}
export declare class GroupsCreateRequest extends SpeakeasyBase {
    pathParams: GroupsCreatePathParams;
    queryParams: GroupsCreateQueryParams;
    request: GroupsCreateRequests;
}
export declare class GroupsCreateResponse extends SpeakeasyBase {
    adGroup?: Record<string, Record<string, any>>;
    contentType: string;
    graphError?: shared.GraphError;
    statusCode: number;
}
