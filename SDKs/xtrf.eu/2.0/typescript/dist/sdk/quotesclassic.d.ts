import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * To change the description use /examples/TagsDescriptions.json
 */
export declare class QuotesClassic {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a new language combination for a given quote without creating a task.
     *
     * @remarks
     * Creates a new language combination for a given quote without creating a task.
     */
    createLanguageCombination1(req: operations.CreateLanguageCombination1Request, config?: AxiosRequestConfig): Promise<operations.CreateLanguageCombination1Response>;
    /**
     * Adds a payable.
     *
     * @remarks
     * Adds a payable.
     */
    createPayable1(req: operations.CreatePayable1Request, config?: AxiosRequestConfig): Promise<operations.CreatePayable1Response>;
    /**
     * Adds a receivable.
     *
     * @remarks
     * Adds a receivable.
     */
    createReceivable1(req: operations.CreateReceivable1Request, config?: AxiosRequestConfig): Promise<operations.CreateReceivable1Response>;
    /**
     * Creates a new task for a given quote.
     *
     * @remarks
     * Creates a new task for a given quote. Required fields are presented in the example.
     */
    createTask1(req: operations.CreateTask1Request, config?: AxiosRequestConfig): Promise<operations.CreateTask1Response>;
    /**
     * Deletes a payable.
     *
     * @remarks
     * Deletes a payable.
     */
    deletePayable1(req: operations.DeletePayable1Request, config?: AxiosRequestConfig): Promise<operations.DeletePayable1Response>;
    /**
     * Deletes a receivable.
     *
     * @remarks
     * Deletes a receivable.
     */
    deleteReceivable1(req: operations.DeleteReceivable1Request, config?: AxiosRequestConfig): Promise<operations.DeleteReceivable1Response>;
    /**
     * Removes a quote.
     *
     * @remarks
     * Removes a quote.
     */
    delete13(req: operations.Delete13Request, config?: AxiosRequestConfig): Promise<operations.Delete13Response>;
    /**
     * Returns quotes' internal identifiers.
     *
     * @remarks
     * Returns quotes' internal identifiers.
     */
    getAllIds7(req: operations.GetAllIds7Request, config?: AxiosRequestConfig): Promise<operations.GetAllIds7Response>;
    /**
     * Returns quote details.
     *
     * @remarks
     * Returns quote details. If the specified quote ID refers to Smart Quote, 400 Bad Request is returned instead.
     */
    getById8(req: operations.GetById8Request, config?: AxiosRequestConfig): Promise<operations.GetById8Response>;
    /**
     * Returns custom fields of a given quote.
     *
     * @remarks
     * Returns custom fields of a given quote.
     */
    getCustomFields6(req: operations.GetCustomFields6Request, config?: AxiosRequestConfig): Promise<operations.GetCustomFields6Response>;
    /**
     * Returns dates of a given quote.
     *
     * @remarks
     * Returns dates of a given quote.
     */
    getDates2(req: operations.GetDates2Request, config?: AxiosRequestConfig): Promise<operations.GetDates2Response>;
    /**
     * Returns finance of a given quote.
     *
     * @remarks
     * Returns finance of a given quote.
     */
    getFinance1(req: operations.GetFinance1Request, config?: AxiosRequestConfig): Promise<operations.GetFinance1Response>;
    /**
     * Returns instructions of a given quote.
     *
     * @remarks
     * Returns instructions of a given quote.
     */
    getInstructions1(req: operations.GetInstructions1Request, config?: AxiosRequestConfig): Promise<operations.GetInstructions1Response>;
    /**
     * Sends a quote for customer confirmation.
     *
     * @remarks
     * Sends a quote for customer confirmation. Quote status is changed to SENT and a document is sent to the customer.
     */
    send1(req: operations.Send1Request, config?: AxiosRequestConfig): Promise<operations.Send1Response>;
    /**
     * Starts a quote.
     *
     * @remarks
     * Starts a quote.
     */
    start(req: operations.StartRequest, config?: AxiosRequestConfig): Promise<operations.StartResponse>;
    /**
     * Updates custom fields of a given quote.
     *
     * @remarks
     * Updates custom fields of a given quote.
     */
    updateCustomFields4(req: operations.UpdateCustomFields4Request, config?: AxiosRequestConfig): Promise<operations.UpdateCustomFields4Response>;
    /**
     * Updates instructions of a given quote.
     *
     * @remarks
     * Updates instructions of a given quote.
     */
    updateInstructions2(req: operations.UpdateInstructions2Request, config?: AxiosRequestConfig): Promise<operations.UpdateInstructions2Response>;
    /**
     * Updates a payable.
     *
     * @remarks
     * Updates a payable.
     */
    updatePayable1(req: operations.UpdatePayable1Request, config?: AxiosRequestConfig): Promise<operations.UpdatePayable1Response>;
    /**
     * Updates a receivable.
     *
     * @remarks
     * Updates a receivable.
     */
    updateReceivable1(req: operations.UpdateReceivable1Request, config?: AxiosRequestConfig): Promise<operations.UpdateReceivable1Response>;
}
