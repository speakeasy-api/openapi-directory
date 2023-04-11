import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DomainsGetRequest extends SpeakeasyBase {
    /**
     * Client API version.
     */
    apiVersion: string;
    /**
     * name of the domain.
     */
    domainName: string;
    /**
     * The tenant ID.
     */
    tenantID: string;
}
export declare class DomainsGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK. The operation was successful.
     */
    domain?: Record<string, Record<string, any>>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
