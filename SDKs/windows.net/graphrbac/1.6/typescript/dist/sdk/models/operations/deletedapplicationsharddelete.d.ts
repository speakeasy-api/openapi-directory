import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeletedApplicationsHardDeletePathParams extends SpeakeasyBase {
    applicationObjectId: string;
    tenantID: string;
}
export declare class DeletedApplicationsHardDeleteQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class DeletedApplicationsHardDeleteRequest extends SpeakeasyBase {
    pathParams: DeletedApplicationsHardDeletePathParams;
    queryParams: DeletedApplicationsHardDeleteQueryParams;
}
export declare class DeletedApplicationsHardDeleteResponse extends SpeakeasyBase {
    contentType: string;
    graphError?: shared.GraphError;
    statusCode: number;
}
