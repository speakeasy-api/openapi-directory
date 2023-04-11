import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * We provided payment methods configuration that allow our sellers to configure installment options and from that configuration we generate an installment service.
 */
export declare class Installments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Installments options
     *
     * @remarks
     * Returns the best installment options according to the informed params.
     */
    installmentsoptions(req: operations.InstallmentsoptionsRequest, config?: AxiosRequestConfig): Promise<operations.InstallmentsoptionsResponse>;
}
