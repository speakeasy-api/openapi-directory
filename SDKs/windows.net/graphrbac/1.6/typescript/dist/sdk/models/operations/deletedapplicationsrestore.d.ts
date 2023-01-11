import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeletedApplicationsRestorePathParams extends SpeakeasyBase {
    objectId: string;
    tenantID: string;
}
export declare class DeletedApplicationsRestoreQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class DeletedApplicationsRestoreRequest extends SpeakeasyBase {
    pathParams: DeletedApplicationsRestorePathParams;
    queryParams: DeletedApplicationsRestoreQueryParams;
}
export declare class DeletedApplicationsRestoreResponse extends SpeakeasyBase {
    application?: Record<string, Record<string, any>>;
    contentType: string;
    graphError?: shared.GraphError;
    statusCode: number;
}
