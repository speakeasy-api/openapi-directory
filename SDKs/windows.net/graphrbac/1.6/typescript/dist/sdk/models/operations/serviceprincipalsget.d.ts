import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicePrincipalsGetPathParams extends SpeakeasyBase {
    objectId: string;
    tenantID: string;
}
export declare class ServicePrincipalsGetQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class ServicePrincipalsGetRequest extends SpeakeasyBase {
    pathParams: ServicePrincipalsGetPathParams;
    queryParams: ServicePrincipalsGetQueryParams;
}
export declare class ServicePrincipalsGetResponse extends SpeakeasyBase {
    contentType: string;
    graphError?: shared.GraphError;
    servicePrincipal?: Record<string, Record<string, any>>;
    statusCode: number;
}
