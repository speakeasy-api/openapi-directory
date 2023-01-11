import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PotsHoldingsAndTransactions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * updatePot - Update existing Pot details
     *
     * Update an existing Pot. WealthOS will update only the fields sent in the payload.
    **/
    updatePot(req: operations.UpdatePotRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePotResponse>;
    /**
     * createPot - Create new pot
    **/
    createPot(req: operations.CreatePotRequest, config?: AxiosRequestConfig): Promise<operations.CreatePotResponse>;
    /**
     * getPot - Retrive existing pot from pot id
    **/
    getPot(req: operations.GetPotRequest, config?: AxiosRequestConfig): Promise<operations.GetPotResponse>;
    /**
     * getPotHoldings - Get current holdings of a pot
     *
     * Get a breakdown of all the holdings of a pot (cash and investment product holdings)
    **/
    getPotHoldings(req: operations.GetPotHoldingsRequest, config?: AxiosRequestConfig): Promise<operations.GetPotHoldingsResponse>;
    /**
     * getPotTransactions - Get pending & past transactions of a pot
     *
     * Get a list of pending and archived transactions of the pot by date range. Only last 1000 records will be recieved if the result contain more that 1000 transactions. In that case, the pagination should be used.
    **/
    getPotTransactions(req: operations.GetPotTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.GetPotTransactionsResponse>;
    /**
     * getPotValue - Get current value of a pot
     *
     * Get the current value of the pot (including cash and investment product holdings)
    **/
    getPotValue(req: operations.GetPotValueRequest, config?: AxiosRequestConfig): Promise<operations.GetPotValueResponse>;
    /**
     * getPots - Get all pots for an investor
     *
     * Get all Investment Pots of the investor
    **/
    getPots(req: operations.GetPotsRequest, config?: AxiosRequestConfig): Promise<operations.GetPotsResponse>;
    /**
     * getTotalPotHoldings - Get total holdings of an Investor
     *
     * Get a breakdown of all the holdings(cash and investment product holdings) of an investor organised by the pot they belong to.
    **/
    getTotalPotHoldings(req: operations.GetTotalPotHoldingsRequest, config?: AxiosRequestConfig): Promise<operations.GetTotalPotHoldingsResponse>;
    /**
     * getTotalPotValue - Get total value of all pots of an investor
     *
     * Get the current value of all the investor’s pots broken down by currency (including cash and investment product holdings)
    **/
    getTotalPotValue(req: operations.GetTotalPotValueRequest, config?: AxiosRequestConfig): Promise<operations.GetTotalPotValueResponse>;
}
