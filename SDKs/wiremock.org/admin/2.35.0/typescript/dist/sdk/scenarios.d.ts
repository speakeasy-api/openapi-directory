import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Scenarios support modelling of stateful behaviour
 *
 * @see {@link http://wiremock.org/docs/stateful-behaviour/} - User documentation
 */
export declare class Scenarios {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get all scenarios
     */
    getAdminScenarios(config?: AxiosRequestConfig): Promise<operations.GetAdminScenariosResponse>;
    /**
     * Reset the state of all scenarios
     */
    postAdminScenariosReset(config?: AxiosRequestConfig): Promise<operations.PostAdminScenariosResetResponse>;
}
