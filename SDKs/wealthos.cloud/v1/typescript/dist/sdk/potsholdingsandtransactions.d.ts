import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Pots allows a wealth manager to compartmentalise investments made by (or on behalf of) an investor to represent different savings goals, risk appetite and investment instructions (e.g. model portfolios).
 *
 * @remarks
 * An Investor can have multiple pots for a financial product (e.g within the General Investment Account, one pot could be to target a house purchase goal whereas another pot could target savings for school fees etc.). Each pot consists of cash,  investment product holdings, both cash and investments or nothing (empty pot - pending investments).
 * <!--Creating or updating a pot with a linked portfolio template - `portfolio_template_id`  will allow WealthOS to carry out actions such as automated investing based on portfolio, portfolio rebalancing etc. for a pot.
 * -->
 * This end point also returns key information related to the pot (e.g. value, total holdings etc.) as well as transaction history for the pot.
 *
 * ### Current Holdings and Transaction History
 * #### Current Holding
 * * Cash : `investment_product_id` will be specified as `cash`. For cash holdings, `free_quantity` and `free_value` will return the cash that is settled and available, while `locked_quantity` and `locked_value`  returns the value of cash which is locked (i.e unsettled, ringfenced for a fee deduction etc.) and cannot be used.`total_quantity` and `total_value` will be the total of free and locked.
 *
 * * Investment Products : For investment product holdings,  `total_quantity`  return the total number of units held of an investment product within the pot, `locked-quantity` returns the total number of unit which are locked (e.g. ringfenced to be sold) and `free-quantity` returns number of units available for trading. Value of the holdings are calculated using latest available price. So the formula to calculate the value of the investment products holdings will be `quantity`*`price`.
 *
 * #### Pending Transactions
 * * Cash : `type : pending`,`direction : in` (if cash is inbound) or `out` (if cash is withdrawn - functionality not available yet).
 *
 * * Investment products : `type : pending`,`direction : in`(buy instruction) or `out` (sell instruction).
 *
 * #### Archived Transactions (historical)
 *
 * * Cash : `type = archived`, `direction= in` (if cash is inbound) or `out` (if cash is withdrawn - functionality not available yet) and `sub-type : "rejected" or "cancelled"`for a failed transaction, and `sub-type = "confirmed"or "settled"` for a successful transaction.
 *
 * * Investment Products : `type = archived`, `direction= in` (buy instruction) or `out` (sell instruction) and `sub-type = "rejected"or "cancelled"` for a failed transaction, and `sub-type = "confirmed"or "settled"` for a successful transaction.
 *
 */
export declare class PotsHoldingsAndTransactions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Update existing Pot details
     *
     * @remarks
     * Update an existing Pot. WealthOS will update only the fields sent in the payload.
     */
    updatePot(req: operations.UpdatePotRequest, security: operations.UpdatePotSecurity, config?: AxiosRequestConfig): Promise<operations.UpdatePotResponse>;
    /**
     * Create new pot
     */
    createPot(req: operations.CreatePotRequest, security: operations.CreatePotSecurity, config?: AxiosRequestConfig): Promise<operations.CreatePotResponse>;
    /**
     * Retrive existing pot from pot id
     */
    getPot(req: operations.GetPotRequest, security: operations.GetPotSecurity, config?: AxiosRequestConfig): Promise<operations.GetPotResponse>;
    /**
     * Get current holdings of a pot
     *
     * @remarks
     * Get a breakdown of all the holdings of a pot (cash and investment product holdings)
     */
    getPotHoldings(req: operations.GetPotHoldingsRequest, security: operations.GetPotHoldingsSecurity, config?: AxiosRequestConfig): Promise<operations.GetPotHoldingsResponse>;
    /**
     * Get pending & past transactions of a pot
     *
     * @remarks
     * Get a list of pending and archived transactions of the pot by date range. Only last 1000 records will be recieved if the result contain more that 1000 transactions. In that case, the pagination should be used.
     */
    getPotTransactions(req: operations.GetPotTransactionsRequest, security: operations.GetPotTransactionsSecurity, config?: AxiosRequestConfig): Promise<operations.GetPotTransactionsResponse>;
    /**
     * Get current value of a pot
     *
     * @remarks
     * Get the current value of the pot (including cash and investment product holdings)
     */
    getPotValue(req: operations.GetPotValueRequest, security: operations.GetPotValueSecurity, config?: AxiosRequestConfig): Promise<operations.GetPotValueResponse>;
    /**
     * Get all pots for an investor
     *
     * @remarks
     * Get all Investment Pots of the investor
     */
    getPots(req: operations.GetPotsRequest, security: operations.GetPotsSecurity, config?: AxiosRequestConfig): Promise<operations.GetPotsResponse>;
    /**
     * Get total holdings of an Investor
     *
     * @remarks
     * Get a breakdown of all the holdings(cash and investment product holdings) of an investor organised by the pot they belong to.
     */
    getTotalPotHoldings(req: operations.GetTotalPotHoldingsRequest, security: operations.GetTotalPotHoldingsSecurity, config?: AxiosRequestConfig): Promise<operations.GetTotalPotHoldingsResponse>;
    /**
     * Get total value of all pots of an investor
     *
     * @remarks
     * Get the current value of all the investor’s pots broken down by currency (including cash and investment product holdings)
     */
    getTotalPotValue(req: operations.GetTotalPotValueRequest, security: operations.GetTotalPotValueSecurity, config?: AxiosRequestConfig): Promise<operations.GetTotalPotValueResponse>;
}
