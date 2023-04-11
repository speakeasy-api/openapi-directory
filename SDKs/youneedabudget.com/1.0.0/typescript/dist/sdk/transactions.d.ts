import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The transactions for a budget
 */
export declare class Transactions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a single transaction or multiple transactions
     *
     * @remarks
     * Creates a single transaction or multiple transactions.  If you provide a body containing a `transaction` object, a single transaction will be created and if you provide a body containing a `transactions` array, multiple transactions will be created.  Scheduled transactions cannot be created on this endpoint.
     */
    createTransaction(req: operations.CreateTransactionRequest, config?: AxiosRequestConfig): Promise<operations.CreateTransactionResponse>;
    /**
     * Deletes an existing transaction
     *
     * @remarks
     * Deletes a transaction
     */
    deleteTransaction(req: operations.DeleteTransactionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTransactionResponse>;
    /**
     * Single transaction
     *
     * @remarks
     * Returns a single transaction
     */
    getTransactionById(req: operations.GetTransactionByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionByIdResponse>;
    /**
     * List transactions
     *
     * @remarks
     * Returns budget transactions
     */
    getTransactions(req: operations.GetTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionsResponse>;
    /**
     * List account transactions
     *
     * @remarks
     * Returns all transactions for a specified account
     */
    getTransactionsByAccount(req: operations.GetTransactionsByAccountRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionsByAccountResponse>;
    /**
     * List category transactions
     *
     * @remarks
     * Returns all transactions for a specified category
     */
    getTransactionsByCategory(req: operations.GetTransactionsByCategoryRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionsByCategoryResponse>;
    /**
     * List payee transactions
     *
     * @remarks
     * Returns all transactions for a specified payee
     */
    getTransactionsByPayee(req: operations.GetTransactionsByPayeeRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionsByPayeeResponse>;
    /**
     * Import transactions
     *
     * @remarks
     * Imports available transactions on all linked accounts for the given budget.  Linked accounts allow transactions to be imported directly from a specified financial institution and this endpoint initiates that import.  Sending a request to this endpoint is the equivalent of clicking "Import" on each account in the web application or tapping the "New Transactions" banner in the mobile applications.  The response for this endpoint contains the transaction ids that have been imported.
     */
    importTransactions(req: operations.ImportTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.ImportTransactionsResponse>;
    /**
     * Updates an existing transaction
     *
     * @remarks
     * Updates a single transaction
     */
    updateTransaction(req: operations.UpdateTransactionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTransactionResponse>;
    /**
     * Update multiple transactions
     *
     * @remarks
     * Updates multiple transactions, by `id` or `import_id`.
     */
    updateTransactions(req: operations.UpdateTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTransactionsResponse>;
}
