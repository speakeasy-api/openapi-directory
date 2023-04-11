import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Configuration {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Affiliation By Id
     *
     * @remarks
     * Returns associated data for the specified affiliation Id, like name and implementation, for example.
     */
    affiliationById(req: operations.AffiliationByIdRequest, config?: AxiosRequestConfig): Promise<operations.AffiliationByIdResponse>;
    /**
     * Affiliations
     *
     * @remarks
     * Returns all affiliations that your provider can handle.
     */
    affiliations(req: operations.AffiliationsRequest, config?: AxiosRequestConfig): Promise<operations.AffiliationsResponse>;
    /**
     * Available Payment Methods
     *
     * @remarks
     * Returns enabled payment methods, like visa, master, bankissueinvoice that are shown for the final user and enabled to receive payment.
     */
    availablePaymentMethods(req: operations.AvailablePaymentMethodsRequest, config?: AxiosRequestConfig): Promise<operations.AvailablePaymentMethodsResponse>;
    /**
     * Insert Affiliation
     *
     * @remarks
     * Creates a new affiliation and returns a successful response.
     */
    insertAffiliation(req: operations.InsertAffiliationRequest, config?: AxiosRequestConfig): Promise<operations.InsertAffiliationResponse>;
    /**
     * Insert Rule
     *
     * @remarks
     * Creates a new rule and returns a successful response.
     */
    insertRule(req: operations.InsertRuleRequest, config?: AxiosRequestConfig): Promise<operations.InsertRuleResponse>;
    /**
     * Rule By Id
     *
     * @remarks
     * Update Rule.
     */
    putRuleById(req: operations.PutRuleByIdRequest, config?: AxiosRequestConfig): Promise<operations.PutRuleByIdResponse>;
    /**
     * Delete Rule
     *
     * @remarks
     * Deletes rules by specified Id.
     */
    rule(req: operations.RuleRequest, config?: AxiosRequestConfig): Promise<operations.RuleResponse>;
    /**
     * Rule By Id
     *
     * @remarks
     * Returns rule by specified RuleId.
     */
    ruleById(req: operations.RuleByIdRequest, config?: AxiosRequestConfig): Promise<operations.RuleByIdResponse>;
    /**
     * Rules
     *
     * @remarks
     * Returns all rules conditions your provider can handle.
     */
    rules(req: operations.RulesRequest, config?: AxiosRequestConfig): Promise<operations.RulesResponse>;
    /**
     * Update Affiliation
     *
     * @remarks
     * Returns all affiliations.
     */
    updateAffiliation(req: operations.UpdateAffiliationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAffiliationResponse>;
}
