import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class MassUpdater {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List all results of a mass action
     *
     * @remarks
     * Describes how to get information about the result of a mass action through the REST API.
     *
     */
    getMassUpdater(req: operations.GETMassUpdaterRequest, config?: AxiosRequestConfig): Promise<operations.GETMassUpdaterResponse>;
    /**
     * Perform a mass action
     *
     * @remarks
     * Describes how to perform a mass action through the REST API.
     *
     * Using this API method, you send a multipart/form-data request containing a `.csv` file with data about the mass action you want to perform. Zuora returns a key and then asynchronously processes the mass action. You can use the key to get details about the result of the mass action.
     *
     * If you want to use this operation to perform the Mass Payment Upload (MPU) mass action, see [Mass Payment Upload](https://knowledgecenter.zuora.com/Billing/Finance/Mass_Updater/Mass_Payment_Upload) for more information.
     *
     */
    postMassUpdater(req: operations.POSTMassUpdaterRequest, config?: AxiosRequestConfig): Promise<operations.POSTMassUpdaterResponse>;
    /**
     * Stop a mass action
     *
     * @remarks
     * Describes how to stop a mass action through the REST API. You can stop a mass action when its status is Pending or Processing. After you have stopped a mass action, you can get the mass action result to see details of the mass action.
     *
     * - If you stop a mass action when its status is Pending, no response file is generated because no records have been processed.
     *
     * - If you stop a mass action when its status is Processing, a response file is generated. You can check the response file to see which records have been processed and which have not. In the response file, the **Success** column has the value `Y` (successful) or `N` (failed) for processed records, and a blank value for unprocessed records.
     *
     * Records that have already been processed when a mass action is stopped are not rolled back.
     *
     */
    putMassUpdater(req: operations.PUTMassUpdaterRequest, config?: AxiosRequestConfig): Promise<operations.PUTMassUpdaterResponse>;
}
