import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApplicationsAddOwnerPathParams extends SpeakeasyBase {
    applicationObjectId: string;
    tenantID: string;
}
export declare class ApplicationsAddOwnerQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class ApplicationsAddOwnerRequests extends SpeakeasyBase {
    addOwnerParameters?: Record<string, Record<string, any>>;
    addOwnerParameters1?: Record<string, Record<string, any>>;
}
export declare class ApplicationsAddOwnerRequest extends SpeakeasyBase {
    pathParams: ApplicationsAddOwnerPathParams;
    queryParams: ApplicationsAddOwnerQueryParams;
    request: ApplicationsAddOwnerRequests;
}
export declare class ApplicationsAddOwnerResponse extends SpeakeasyBase {
    contentType: string;
    graphError?: shared.GraphError;
    statusCode: number;
}
