import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Autocomplete {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Product Search Autocomplete
     *
     * @remarks
     * Retrieves product's information related to the searched string.
     * `{{searchString}} is the part of string the user is looking for.
     * E.g.: `ref` | `refrig` | `refrigerator`
     */
    autoComplete(req: operations.AutoCompleteRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.AutoCompleteResponse>;
}
