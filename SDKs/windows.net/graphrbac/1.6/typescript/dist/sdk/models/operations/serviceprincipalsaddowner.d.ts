import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicePrincipalsAddOwnerPathParams extends SpeakeasyBase {
    objectId: string;
    tenantID: string;
}
export declare class ServicePrincipalsAddOwnerQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class ServicePrincipalsAddOwnerRequests extends SpeakeasyBase {
    addOwnerParameters?: Record<string, Record<string, any>>;
    addOwnerParameters1?: Record<string, Record<string, any>>;
}
export declare class ServicePrincipalsAddOwnerRequest extends SpeakeasyBase {
    pathParams: ServicePrincipalsAddOwnerPathParams;
    queryParams: ServicePrincipalsAddOwnerQueryParams;
    request: ServicePrincipalsAddOwnerRequests;
}
export declare class ServicePrincipalsAddOwnerResponse extends SpeakeasyBase {
    contentType: string;
    graphError?: shared.GraphError;
    statusCode: number;
}
