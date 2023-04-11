import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class FreightValues {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create/update freight values
     *
     * @remarks
     * Creates or updates the freight values of your store's carriers. Learn more in [Shipping rate template](https://help.vtex.com/en/tutorial/planilha-de-frete--tutorials_127#).
     */
    createUpdateFreightValues(req: operations.CreateUpdateFreightValuesRequest, config?: AxiosRequestConfig): Promise<operations.CreateUpdateFreightValuesResponse>;
    /**
     * List freight values
     *
     * @remarks
     * Lists freight values apointed to your store's carriers, searching by carrier ID and postal code (`cep`).
     */
    freightValues(req: operations.FreightValuesRequest, config?: AxiosRequestConfig): Promise<operations.FreightValuesResponse>;
}
