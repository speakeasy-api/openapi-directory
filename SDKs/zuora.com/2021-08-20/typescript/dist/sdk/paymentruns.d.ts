import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PaymentRuns {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a payment run
     *
     * @remarks
     * Deletes a payment run. Only payment runs with the Canceled or Error status can be deleted.
     *
     */
    deletePaymentRun(req: operations.DELETEPaymentRunRequest, config?: AxiosRequestConfig): Promise<operations.DELETEPaymentRunResponse>;
    /**
     * Retrieve a payment run
     *
     * @remarks
     * Retrives the information about a specific payment run.
     *
     */
    getPaymentRun(req: operations.GETPaymentRunRequest, config?: AxiosRequestConfig): Promise<operations.GETPaymentRunResponse>;
    /**
     * Retrieve payment run data
     *
     * @remarks
     * Retrieves payment run data and the processing result with details, if the `data` field was specified in the Create payment run operation.
     *
     *
     */
    getPaymentRunData(req: operations.GETPaymentRunDataRequest, config?: AxiosRequestConfig): Promise<operations.GETPaymentRunDataResponse>;
    /**
     * Retrieve a payment run summary
     *
     * @remarks
     * Retrives the summary of a payment run.
     *
     */
    getPaymentRunSummary(req: operations.GETPaymentRunSummaryRequest, config?: AxiosRequestConfig): Promise<operations.GETPaymentRunSummaryResponse>;
    /**
     * List payment runs
     *
     * @remarks
     * Retrieves the information about all payment runs. You can define filterable fields to restrict the data returned in the response.
     *
     * ### Filtering
     *
     * You can use query parameters to restrict the data returned in the response. Each query parameter corresponds to one field in the response body.
     *
     * If the value of a filterable field is string, you can set the corresponding query parameter to `null` when filtering. Then, you can get the response data with this field value being `null`.
     *
     * Examples:
     *
     * - /v1/payment-runs?status=Processed
     *
     * - /v1/payment-runs?targetDate=2017-10-10&status=Pending
     *
     * - /v1/payment-runs?status=Completed&sort=+updatedDate
     *
     */
    getPaymentRuns(req: operations.GETPaymentRunsRequest, config?: AxiosRequestConfig): Promise<operations.GETPaymentRunsResponse>;
    /**
     * Create a payment run
     *
     * @remarks
     * Creates a payment run. You can create a payment run to be executed immediately after it is created, or a scheduled payment run to be executed in future.
     *
     * To filter the payments to be collected for a payment run, you can use either of the following methods but not both:
     *
     *   - Use the `accountId`, `batch`, `billCycleDay`, `currency`, `paymentGatewayId`, and `billingRunId` fields to define the billing documents to be collected.
     *   - Use the `data` field to specify the records of accounts and billing documents to be collected, in a more flexible manner.
     *
     * If no filter criteria are specified in the request body, the payment run collects payments for all accounts.
     *
     */
    postPaymentRun(req: operations.POSTPaymentRunRequest, config?: AxiosRequestConfig): Promise<operations.POSTPaymentRunResponse>;
    /**
     * Update a payment run
     *
     * @remarks
     * Updates the information about an unexecuted payment run. Only pending payment runs can be updated.
     *
     * If none of the **accountId**, **batch**, **billCycleDay**, **currency**, **paymentGatewayId**, and **billingRunId** fields is specified in the request body, the corresponding payment run collects payments for all accounts.
     *
     */
    putPaymentRun(req: operations.PUTPaymentRunRequest, config?: AxiosRequestConfig): Promise<operations.PUTPaymentRunResponse>;
}
