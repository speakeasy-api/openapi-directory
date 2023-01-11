import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApplicationsCreatePathParams extends SpeakeasyBase {
    tenantID: string;
}
export declare class ApplicationsCreateQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class ApplicationsCreateRequests extends SpeakeasyBase {
    applicationCreateParameters?: shared.ApplicationCreateParameters;
    applicationCreateParameters1?: shared.ApplicationCreateParameters;
}
export declare class ApplicationsCreateRequest extends SpeakeasyBase {
    pathParams: ApplicationsCreatePathParams;
    queryParams: ApplicationsCreateQueryParams;
    request: ApplicationsCreateRequests;
}
export declare class ApplicationsCreateResponse extends SpeakeasyBase {
    application?: Record<string, Record<string, any>>;
    contentType: string;
    graphError?: shared.GraphError;
    statusCode: number;
}
