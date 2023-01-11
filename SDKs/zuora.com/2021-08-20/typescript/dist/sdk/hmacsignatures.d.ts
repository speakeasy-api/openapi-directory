import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class HmacSignatures {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * postHmacSignatures - Generate an HMAC signature
     *
     * This REST API reference describes how to return unique signature and token values that used to process a CORS enabled API call.
     *
    **/
    postHmacSignatures(req: operations.PostHmacSignaturesRequest, config?: AxiosRequestConfig): Promise<operations.PostHmacSignaturesResponse>;
}
