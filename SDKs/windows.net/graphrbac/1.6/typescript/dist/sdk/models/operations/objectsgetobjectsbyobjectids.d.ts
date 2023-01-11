import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectsGetObjectsByObjectIdsPathParams extends SpeakeasyBase {
    tenantID: string;
}
export declare class ObjectsGetObjectsByObjectIdsQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class ObjectsGetObjectsByObjectIdsRequests extends SpeakeasyBase {
    getObjectsParameters?: Record<string, Record<string, any>>;
    getObjectsParameters1?: Record<string, Record<string, any>>;
}
export declare class ObjectsGetObjectsByObjectIdsRequest extends SpeakeasyBase {
    pathParams: ObjectsGetObjectsByObjectIdsPathParams;
    queryParams: ObjectsGetObjectsByObjectIdsQueryParams;
    request: ObjectsGetObjectsByObjectIdsRequests;
}
export declare class ObjectsGetObjectsByObjectIdsResponse extends SpeakeasyBase {
    contentType: string;
    directoryObjectListResult?: shared.DirectoryObjectListResult;
    statusCode: number;
}
