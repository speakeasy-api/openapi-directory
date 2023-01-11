import { SpeakeasyBase } from "../../../internal/utils";
export declare class DomainsGetPathParams extends SpeakeasyBase {
    domainName: string;
    tenantID: string;
}
export declare class DomainsGetQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class DomainsGetRequest extends SpeakeasyBase {
    pathParams: DomainsGetPathParams;
    queryParams: DomainsGetQueryParams;
}
export declare class DomainsGetResponse extends SpeakeasyBase {
    contentType: string;
    domain?: Record<string, Record<string, any>>;
    statusCode: number;
}
