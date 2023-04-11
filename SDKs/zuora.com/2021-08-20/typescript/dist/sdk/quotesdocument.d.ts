import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class QuotesDocument {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Generate a quote document
     *
     * @remarks
     * The `document` call generates a quote document and returns the generated document URL. You can directly access the generated quote file through the returned URL.
     *
     * The `document` call should be only used from Zuora Quotes.
     *
     * ## File Size Limitation
     * The maximum export file size is 2047MB. If you have large data requests that go over this limit, you will get the following 403 HTTP response code from Zuora:
     * `security:max-object-size>2047MB</security:max-object-size>`
     *
     * Submit a request at [Zuora Global Support](http://support.zuora.com/) if you require additional assistance.
     *
     * We can work with you to determine if large file optimization is an option for you.
     *
     */
    postQuotesDocument(req: operations.POSTQuotesDocumentRequest, config?: AxiosRequestConfig): Promise<operations.POSTQuotesDocumentResponse>;
}
