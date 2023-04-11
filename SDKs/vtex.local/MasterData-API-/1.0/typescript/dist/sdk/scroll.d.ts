import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The new `` scroll `` API has been developed to meet external integration scenarios. If you need to query the entire VTEX Master Data database, or your collection is over 10.000 documents, use this feature.
 */
export declare class Scroll {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Scroll documents
     *
     * @remarks
     * Scrolls through documents according to the query parameter filters.
     *
     *
  > Avoid sending too many requests with wildcards (`*`) in the search parameters or that use the `keyword` parameter. This may lead to this endpoint being temporarily blocked for your account. If this happens you will receive an error with status code `429`.
     *
     *
  Use all the features of `search` API to perform filters.
     *
     * In the first request, the `X-VTEX-MD-TOKEN` token will be obtained in the header. This token must be passed to the next request in the query string `_token` parameter. The token has a timeout of 10 minutes, which refreshes after each request.
     *
     * **ATTENTION:** To inform the number of documents per request, use the query string parameter `_size`, which has the maximum value of 1000.
     *
     * After the token is obtained it is no longer necessary to send the filter or document size per page parameters. You only need to resend the token until the document collection is empty.
     *
     * ### First request example:
     * ```
     * /dataentities/CL/scroll?isCluster=true&_size=250&_fields=email,firstName
     * ```
     *
     * After the first request, retrieve the token in the header `X-VTEX-MD-TOKEN` and make the next requests.
     *
     * ### Example of subsequent requests:
     * ```
     * /dataentities/CL/scroll?_token=tokenvalueexample
     * ```
     */
    scrolldocuments(req: operations.ScrolldocumentsRequest, config?: AxiosRequestConfig): Promise<operations.ScrolldocumentsResponse>;
}
