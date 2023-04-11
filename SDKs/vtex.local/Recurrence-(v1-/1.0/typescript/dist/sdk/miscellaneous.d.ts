import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Miscellaneous {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add Subscription item
     *
     * @remarks
     * Adds an item to a Subscription (formerly Recurrence).
     */
    addrecurrenceitem(req: operations.AddrecurrenceitemRequest, config?: AxiosRequestConfig): Promise<operations.AddrecurrenceitemResponse>;
    /**
     * Get Subscriptions
     *
     * @remarks
     * Retrieves a given Subscription (formerly recurrence). There are three options of filtering your Subscruptions v1. It's possible to get a list of all Subscriptions v1, by not adding any query params to your request, and simply executing a call to the url. It is also possible to list the Subscriptions by email, filtering by the email query param. And finnally, it is possible to list recurrences with failures on the last execution cycle, filtering by the cycleStatus query param.
     */
    getRecurrencebyemail(req: operations.GetRecurrencebyemailRequest, config?: AxiosRequestConfig): Promise<operations.GetRecurrencebyemailResponse>;
    /**
     * Get Subscription by recurrenceId
     *
     * @remarks
     * Retrieves a given Subscription (formerly recurrence) by recurrenceId.
     */
    getRecurrencebyrecurrenceId(req: operations.GetRecurrencebyrecurrenceIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRecurrencebyrecurrenceIdResponse>;
    /**
     * Get payment accounts
     *
     * @remarks
     * Lists payment accounts of a given Subscription (formerly Recurrence) by recurrenceId.
     */
    getpaymentaccounts(req: operations.GetpaymentaccountsRequest, config?: AxiosRequestConfig): Promise<operations.GetpaymentaccountsResponse>;
    /**
     * Get Subscription addresses
     *
     * @remarks
     * Retrieves the addresses attached to a given subscription (formerly recurrence) by recurrenceId.
     */
    getrecurrenceaddresses(req: operations.GetrecurrenceaddressesRequest, config?: AxiosRequestConfig): Promise<operations.GetrecurrenceaddressesResponse>;
    /**
     * Get Subscription settings
     *
     * @remarks
     * Retrieves your store's Subscriptions' (formerly recurrence) settings.
     */
    getrecurrencesettings(req: operations.GetrecurrencesettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetrecurrencesettingsResponse>;
    /**
     * Get self Subscription
     *
     * @remarks
     * Lists details of your self Subscription (formerly Recurrence).
     */
    getselfrecurrence(req: operations.GetselfrecurrenceRequest, config?: AxiosRequestConfig): Promise<operations.GetselfrecurrenceResponse>;
    /**
     * Reindex Subscription
     *
     * @remarks
     * Alters the frequency of a given Subscription (formerly Recurrence) by changing period and interval.
     */
    reindexrecurrence(req: operations.ReindexrecurrenceRequest, config?: AxiosRequestConfig): Promise<operations.ReindexrecurrenceResponse>;
    /**
     * Update partial Subscription
     *
     * @remarks
     * Updates partial information of a given subscription (formerly Recurrence).
     */
    updatepartialrecurrence(req: operations.UpdatepartialrecurrenceRequest, config?: AxiosRequestConfig): Promise<operations.UpdatepartialrecurrenceResponse>;
    /**
     * Update Subscription
     *
     * @remarks
     * Updates details of a given Subscription (formerly recurrence).
     */
    updaterecurrence(req: operations.UpdaterecurrenceRequest, config?: AxiosRequestConfig): Promise<operations.UpdaterecurrenceResponse>;
    /**
     * Update Subscription settings
     *
     * @remarks
     * Updates the Subscriptions' (formerly Recurrence) settings of your store by salesChannel and defaultSLA.
     */
    updaterecurrencesettings(req: operations.UpdaterecurrencesettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdaterecurrencesettingsResponse>;
}
