import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Bets {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Allows a trusted application to cash in a bet (take a return on a bet) on behalf of the customer
     *
     * @remarks
     * Allows a trusted application to cash in a bet (take a return on a bet) on behalf of the customer. If the customers monitor bets they can cash in a bet at any point before the event ends.
     */
    cashin(req: operations.CashinRequest, config?: AxiosRequestConfig): Promise<operations.CashinResponse>;
    /**
     * Retrieves the customer’s bet history.
     *
     * @remarks
     * Retrieves the customer’s bet history. Options are available to organise the history in terms of date, bet type and settled and unsettled bets. The maximum number of bets and bet history pages retrieved can also be set.
     */
    getBetHistory(req: operations.GetBetHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetBetHistoryResponse>;
    /**
     * Returns available free bets
     *
     * @remarks
     * Retrieves the current free bets available for a customer.
     */
    getFreeBets(req: operations.GetFreeBetsRequest, config?: AxiosRequestConfig): Promise<operations.GetFreeBetsResponse>;
    /**
     * Places a multiple or a complex bet.
     *
     * @remarks
     * Places a multiple or a complex bet.
     */
    placeComplexBet(req: operations.PlaceComplexBetRequest, config?: AxiosRequestConfig): Promise<operations.PlaceComplexBetResponse>;
    /**
     * Places a single bet
     *
     * @remarks
     * Places a single bet. When placing a single bet using live inplay bets, the system might generate a bet delay to allow a time margin to negate the effects of major changes (for example, goals) to the market. Note that the amount of bet delay will vary by category and event type. A delayedBetId will be recieved that can be used to resubmit the bet.
     */
    placeSingleBet(req: operations.PlaceSingleBetRequest, config?: AxiosRequestConfig): Promise<operations.PlaceSingleBetResponse>;
    /**
     * Organises the betslip when one or more selections are made. It returns a bet slip structure organised by betting opportunities.
     */
    validateBetslip(req: operations.ValidateBetslipRequest, config?: AxiosRequestConfig): Promise<operations.ValidateBetslipResponse>;
}
