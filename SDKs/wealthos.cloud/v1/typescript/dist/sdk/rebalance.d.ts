import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Rebalance {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createRebalance - Trigger rebalance process
     *
     * This endpoint allows you to trigger the rebalancing of a pot (or a group of pots), all pots belonging to an investor (or a group of investors) or all pots linked to a portfolio (or a group of portfolios). The response will contain a `rebalance_request_id` and `status` of the request.
    **/
    createRebalance(req: operations.CreateRebalanceRequest, config?: AxiosRequestConfig): Promise<operations.CreateRebalanceResponse>;
    /**
     * evaluateRebalance - Evaluate rebalance
     *
     * Evaluate if a pot or a group of pots has deviated significatly from the target portfolio and eligible for rebalancing. The request can be sent for a pot (or a group of pots), all pots belonging to an investor (or a group of investors) or all pots linked to a portfolio (or a group of portfolios). The response will indicate if the pot is eligible for rebalance and % deviation from the target portfolio template.
    **/
    evaluateRebalance(req: operations.EvaluateRebalanceRequest, config?: AxiosRequestConfig): Promise<operations.EvaluateRebalanceResponse>;
    /**
     * getRebalanceDetails - Retrieve rebalance request related details
     *
     * Retrieve details of a rebalace request using the `rebalance_request_id`.
    **/
    getRebalanceDetails(req: operations.GetRebalanceDetailsRequest, config?: AxiosRequestConfig): Promise<operations.GetRebalanceDetailsResponse>;
}
