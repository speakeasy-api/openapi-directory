import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApplicationsGetPathParams extends SpeakeasyBase {
    applicationObjectId: string;
    tenantID: string;
}
export declare class ApplicationsGetQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class ApplicationsGetRequest extends SpeakeasyBase {
    pathParams: ApplicationsGetPathParams;
    queryParams: ApplicationsGetQueryParams;
}
export declare class ApplicationsGetResponse extends SpeakeasyBase {
    application?: Record<string, Record<string, any>>;
    contentType: string;
    graphError?: shared.GraphError;
    statusCode: number;
}
