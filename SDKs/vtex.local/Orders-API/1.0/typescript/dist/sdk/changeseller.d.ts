import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ChangeSeller {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get window to change seller
     *
     * @remarks
     * Retrieves a marketplace’s window to change seller, that is, the period when it is possible to choose another seller to fulfill a given order after the original seller has canceled it.
     *
     *
  The default period for this window is of 2 days, but it can be configured by the request Update window to change seller.
     */
    getWindowToChangeSeller(req: operations.GetWindowToChangeSellerRequest, config?: AxiosRequestConfig): Promise<operations.GetWindowToChangeSellerResponse>;
    /**
     * Update window to change seller
     *
     * @remarks
     * Updates a marketplace’s window to change seller, that is, the period when it is possible to choose another seller to fulfill a given order after the original seller has canceled it.
     *
     *
  It is possible to check the current window using the request Get window to change seller.
     */
    updateWindowToChangeSeller(req: operations.UpdateWindowToChangeSellerRequest, config?: AxiosRequestConfig): Promise<operations.UpdateWindowToChangeSellerResponse>;
}
