import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DomainsListRequest extends SpeakeasyBase {
    /**
     * The filter to apply to the operation.
     */
    dollarFilter?: string;
    /**
     * Client API version.
     */
    apiVersion: string;
    /**
     * The tenant ID.
     */
    tenantID: string;
}
export declare class DomainsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK. The operation was successful.
     */
    domainListResult?: shared.DomainListResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
