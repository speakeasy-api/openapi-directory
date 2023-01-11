import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GroupsGetPathParams extends SpeakeasyBase {
    objectId: string;
    tenantID: string;
}
export declare class GroupsGetQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class GroupsGetRequest extends SpeakeasyBase {
    pathParams: GroupsGetPathParams;
    queryParams: GroupsGetQueryParams;
}
export declare class GroupsGetResponse extends SpeakeasyBase {
    adGroup?: Record<string, Record<string, any>>;
    contentType: string;
    graphError?: shared.GraphError;
    statusCode: number;
}
