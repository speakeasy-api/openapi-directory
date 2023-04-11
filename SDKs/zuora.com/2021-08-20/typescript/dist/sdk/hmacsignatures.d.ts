import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class HMACSignatures {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Generate an HMAC signature
     *
     * @remarks
     * This REST API reference describes how to return unique signature and token values that used to process a CORS enabled API call.
     *
     */
    postHMACSignatures(req: operations.POSTHMACSignaturesRequest, config?: AxiosRequestConfig): Promise<operations.POSTHMACSignaturesResponse>;
}
