import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Micro-segmentation APIs
 */
export declare class Microsegmentation {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Export recommended rules for NSX-V
     *
     * @remarks
     * Export recommended firewall rules based on the flow data gathered by vRealize Network Insight in NSX-V compatible
     * format
     */
    exportNsxRecommendedRules(req: shared.RecommendedRulesRequest, security: operations.ExportNsxRecommendedRulesSecurity, config?: AxiosRequestConfig): Promise<operations.ExportNsxRecommendedRulesResponse>;
    /**
     * Get logical recommended rules
     *
     * @remarks
     * Get recommended firewall rules based on the flow data gathered by vRealize Network Insight.
     * This API provides service to retrieve recommended rules based on flow traffic that is observed between
     * two groups OR for a single group based on all the inbound and outboud traffic for that group.
     * In case two groups are provided, both the groups should be of same type.
     * Currently supported groups are Application, Tier, NSXSecurityGroup, EC2SecurityGroup.
     */
    listRecommendedRules(req: shared.RecommendedRulesRequest, security: operations.ListRecommendedRulesSecurity, config?: AxiosRequestConfig): Promise<operations.ListRecommendedRulesResponse>;
}
