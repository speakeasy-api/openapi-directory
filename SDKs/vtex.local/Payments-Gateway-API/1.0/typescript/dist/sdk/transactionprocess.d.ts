import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * This is meant to explain the requests that are necessary to complete a transaction using PCI Gateway.
 */
export declare class TransactionProcess {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * 1. Starts a new transaction
     *
     * @remarks
     * This request is the first step to create a new transaction.
     */
    oneCreateanewtransaction(req: operations.OneCreateanewtransactionRequest, config?: AxiosRequestConfig): Promise<operations.OneCreateanewtransactionResponse>;
    /**
     * 2.1 Send Payments Information Public
     *
     * @remarks
     * The second step to create a new transaction. Here, you have the option to send the data in three diferent ways: doing a private request, a public request or a private request that uses a saved Credit Card.
     */
    twoSendPaymentsPublic(req: operations.TwoSendPaymentsPublicRequest, config?: AxiosRequestConfig): Promise<operations.TwoSendPaymentsPublicResponse>;
    /**
     * 2.2 Send Payments With Saved Credit Card
     *
     * @remarks
     * The second step to create a new transaction. Here, you have the option to send the data in three diferent ways: doing a private request, a public request or a private request that uses a saved Credit Card.
     */
    twoSendPaymentsWithSavedCreditCard(req: operations.TwoSendPaymentsWithSavedCreditCardRequest, config?: AxiosRequestConfig): Promise<operations.TwoSendPaymentsWithSavedCreditCardResponse>;
    /**
     * 3. Send Additional Data
     *
     * @remarks
     * The third step to create a new transaction. It will send the additional related data to the transaction, like billig and shipping adress.
     */
    threeSendAdditionalData(req: operations.ThreeSendAdditionalDataRequest, config?: AxiosRequestConfig): Promise<operations.ThreeSendAdditionalDataResponse>;
    /**
     * Do authorization
     *
     * @remarks
     * The fouth and last step to create a new transaction. It will authorized the new transction creation acorrdint to the data previously informed in the latests requests.
     */
    fourDoauthorization(req: operations.FourDoauthorizationRequest, config?: AxiosRequestConfig): Promise<operations.FourDoauthorizationResponse>;
    /**
     * Payment Details
     *
     * @remarks
     * Returns associated information details for the specified payment id.
     */
    paymentDetails(req: operations.PaymentDetailsRequest, config?: AxiosRequestConfig): Promise<operations.PaymentDetailsResponse>;
    /**
     * Transaction Details
     *
     * @remarks
     * Returns associated data for the specified transaction id, like value and status, for exemple.
     */
    transactionDetails(req: operations.TransactionDetailsRequest, config?: AxiosRequestConfig): Promise<operations.TransactionDetailsResponse>;
    /**
     * Transaction Settlement  Details
     *
     * @remarks
     * Returns associated settlements data for the specified transaction id.
     */
    transactionSettlementDetails(req: operations.TransactionSettlementDetailsRequest, config?: AxiosRequestConfig): Promise<operations.TransactionSettlementDetailsResponse>;
}
