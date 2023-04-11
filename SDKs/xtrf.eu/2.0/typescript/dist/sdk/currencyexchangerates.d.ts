import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * To change the description use /examples/TagsDescriptions.json
 */
export declare class CurrencyExchangeRates {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Adding currency exchange rates.
     *
     * @remarks
     * Adding currency exchange rates via API
     */
    createExchangeRate(req: operations.CreateExchangeRateRequest, config?: AxiosRequestConfig): Promise<operations.CreateExchangeRateResponse>;
    /**
     * Returns currency exchange rates.
     *
     * @remarks
     * Returns currency exchange rates.
     */
    getByIsoCode(req: operations.GetByIsoCodeRequest, config?: AxiosRequestConfig): Promise<operations.GetByIsoCodeResponse>;
}
