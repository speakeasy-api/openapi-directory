import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class HostedPages {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getHostedPages - List hosted pages
     *
     * Returns the Payment Pages configuration metadata,
     * specifically, page ID, page version, payment method type.
     *
     * The following are the version-specific and general REST requests for Payment Pages:
     *
     * * The request for Payment Pages 1.0 configuration information: `GET <BaseURL>/hostedpages?version=1`
     * * The request for Payment Pages 2.0 configuration information: `GET <BaseURL>/hostedpages?version=2`
     * * The request for all versions of Payment Pages configuration information: `GET <BaseURL>/hostedpages`
     *
     * ## Notes
     * If you do not have the corresponding tenant setting enabled, e.g., the request `version` parameter set to 2 with the Payment Pages 2.0 setting disabled, you will receive an error.
     *
    **/
    getHostedPages(req: operations.GetHostedPagesRequest, config?: AxiosRequestConfig): Promise<operations.GetHostedPagesResponse>;
}
