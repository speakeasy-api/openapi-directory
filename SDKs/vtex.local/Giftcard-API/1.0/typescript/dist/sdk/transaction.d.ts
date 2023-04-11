import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Transaction {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Cancel GiftCard Transaction
     *
     * @remarks
     * Creates a cancellation in the transaction. Cancel a item reservation or create a refund.
     */
    cancelGiftCardTransaction(req: operations.CancelGiftCardTransactionRequest, config?: AxiosRequestConfig): Promise<operations.CancelGiftCardTransactionResponse>;
    /**
     * Create GiftCard Transaction
     *
     * @remarks
     * Register a new giftcard transaction and authorize the item reservation.
     */
    createGiftCardTransaction(req: operations.CreateGiftCardTransactionRequest, config?: AxiosRequestConfig): Promise<operations.CreateGiftCardTransactionResponse>;
    /**
     * Get GiftCard Transaction by ID
     */
    getGiftCardTransactionbyID(req: operations.GetGiftCardTransactionbyIDRequest, config?: AxiosRequestConfig): Promise<operations.GetGiftCardTransactionbyIDResponse>;
    /**
     * Get GiftCard Transactions
     *
     * @remarks
     * Returns all transaction of a giftcard.
     */
    getGiftCardTransactions(req: operations.GetGiftCardTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.GetGiftCardTransactionsResponse>;
    /**
     * Get Transaction Authorizations
     *
     * @remarks
     * Returns the giftcard transaction authorizations.
     */
    getTransactionAuthorizations(req: operations.GetTransactionAuthorizationsRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionAuthorizationsResponse>;
    /**
     * Get Transaction Cancellations
     *
     * @remarks
     * Returns the giftcard transaction cancellations.
     */
    getTransactionCancellations(req: operations.GetTransactionCancellationsRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionCancellationsResponse>;
    /**
     * Get Transaction Settlements
     *
     * @remarks
     * Returns the giftcard transaction settlements.
     */
    getTransactionSettlements(req: operations.GetTransactionSettlementsRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionSettlementsResponse>;
    /**
     * Settle GiftCard Transaction
     *
     * @remarks
     * Creates a giftcard transaction settlement.
     */
    settleGiftCardTransaction(req: operations.SettleGiftCardTransactionRequest, config?: AxiosRequestConfig): Promise<operations.SettleGiftCardTransactionResponse>;
}
