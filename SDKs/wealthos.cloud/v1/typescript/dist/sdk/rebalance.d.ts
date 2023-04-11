import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The rebalancing feature provides advisors and portfolio managers the ability to evaluate which pots have drifted significantly from their target portfolios, and trigger a rebalance execution for these pots to bring the holdings back to parity with the pot's target portfolio. Driven by a single rebalance request, the system completely orchestrates this multi-day buy/sell process across a host of different pots, with status updates being provided via API endpoints and web sockets.
 */
export declare class Rebalance {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Trigger rebalance process
     *
     * @remarks
     * This endpoint allows you to trigger the rebalancing of a pot (or a group of pots), all pots belonging to an investor (or a group of investors) or all pots linked to a portfolio (or a group of portfolios). The response will contain a `rebalance_request_id` and `status` of the request.
     */
    createRebalance(req: operations.CreateRebalanceRequest, security: operations.CreateRebalanceSecurity, config?: AxiosRequestConfig): Promise<operations.CreateRebalanceResponse>;
    /**
     * Evaluate rebalance
     *
     * @remarks
     * Evaluate if a pot or a group of pots has deviated significatly from the target portfolio and eligible for rebalancing. The request can be sent for a pot (or a group of pots), all pots belonging to an investor (or a group of investors) or all pots linked to a portfolio (or a group of portfolios). The response will indicate if the pot is eligible for rebalance and % deviation from the target portfolio template.
     */
    evaluateRebalance(req: operations.EvaluateRebalanceRequest, security: operations.EvaluateRebalanceSecurity, config?: AxiosRequestConfig): Promise<operations.EvaluateRebalanceResponse>;
    /**
     * Retrieve rebalance request related details
     *
     * @remarks
     * Retrieve details of a rebalace request using the `rebalance_request_id`.
     */
    getRebalanceDetails(req: operations.GetRebalanceDetailsRequest, security: operations.GetRebalanceDetailsSecurity, config?: AxiosRequestConfig): Promise<operations.GetRebalanceDetailsResponse>;
}
