import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PriceAssociation {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Disassociate price association by ID
     *
     * @remarks
     * Disassociates a price association from a shopping scenario by its ID
     */
    deleteVCustomPricesRulesPriceAssociationId(req: operations.DeleteVCustomPricesRulesPriceAssociationIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVCustomPricesRulesPriceAssociationIdResponse>;
    /**
     * Get price association by ID
     *
     * @remarks
     * Retrieves price association for a shopping scenario by its ID
     */
    getVCustomPricesRulesPriceAssociationId(req: operations.GetVCustomPricesRulesPriceAssociationIdRequest, config?: AxiosRequestConfig): Promise<operations.GetVCustomPricesRulesPriceAssociationIdResponse>;
    /**
     * Create price association
     *
     * @remarks
     * Creates a new price association for a shopping scenario
     */
    postVCustomPricesRules(req: operations.PostVCustomPricesRulesRequest, config?: AxiosRequestConfig): Promise<operations.PostVCustomPricesRulesResponse>;
    /**
     * Update price association by ID
     *
     * @remarks
     * Updates a price association for a shopping scenario by its ID
     */
    putVCustomPricesRulesPriceAssociationId(req: operations.PutVCustomPricesRulesPriceAssociationIdRequest, config?: AxiosRequestConfig): Promise<operations.PutVCustomPricesRulesPriceAssociationIdResponse>;
}
