import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * To change the description use /examples/TagsDescriptions.json
 */
export declare class Macros {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Executes a macro.
     *
     * @remarks
     * Runs a specified macro on a specified list of items ("list" variable in the macro code). The list of items can be empty if the macro doesn't use it. Additional custom parameters can be provided to the macro when necessary ("params" variable in the macro code).
     *
     *  <BR>Note: Macros that support parameters can be also run from GUI (Views in Home Portal),so they should also handle the empty parameters map (e.g. by defining default values when parameters are not provided).
     */
    run(req: operations.RunRequest, config?: AxiosRequestConfig): Promise<operations.RunResponse>;
}
