import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Transactions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createTransaction - Create a single transaction or multiple transactions
     *
     * Creates a single transaction or multiple transactions.  If you provide a body containing a `transaction` object, a single transaction will be created and if you provide a body containing a `transactions` array, multiple transactions will be created.  Scheduled transactions cannot be created on this endpoint.
    **/
    createTransaction(req: operations.CreateTransactionRequest, config?: AxiosRequestConfig): Promise<operations.CreateTransactionResponse>;
    /**
     * getTransactionById - Single transaction
     *
     * Returns a single transaction
    **/
    getTransactionById(req: operations.GetTransactionByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionByIdResponse>;
    /**
     * getTransactions - List transactions
     *
     * Returns budget transactions
    **/
    getTransactions(req: operations.GetTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionsResponse>;
    /**
     * getTransactionsByAccount - List account transactions
     *
     * Returns all transactions for a specified account
    **/
    getTransactionsByAccount(req: operations.GetTransactionsByAccountRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionsByAccountResponse>;
    /**
     * getTransactionsByCategory - List category transactions
     *
     * Returns all transactions for a specified category
    **/
    getTransactionsByCategory(req: operations.GetTransactionsByCategoryRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionsByCategoryResponse>;
    /**
     * getTransactionsByPayee - List payee transactions
     *
     * Returns all transactions for a specified payee
    **/
    getTransactionsByPayee(req: operations.GetTransactionsByPayeeRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionsByPayeeResponse>;
    /**
     * importTransactions - Import transactions
     *
     * Imports available transactions on all linked accounts for the given budget.  Linked accounts allow transactions to be imported directly from a specified financial institution and this endpoint initiates that import.  Sending a request to this endpoint is the equivalent of clicking "Import" on each account in the web application or tapping the "New Transactions" banner in the mobile applications.  The response for this endpoint contains the transaction ids that have been imported.
    **/
    importTransactions(req: operations.ImportTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.ImportTransactionsResponse>;
    /**
     * updateTransaction - Updates an existing transaction
     *
     * Updates a single transaction
    **/
    updateTransaction(req: operations.UpdateTransactionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTransactionResponse>;
    /**
     * updateTransactions - Update multiple transactions
     *
     * Updates multiple transactions, by `id` or `import_id`.
    **/
    updateTransactions(req: operations.UpdateTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTransactionsResponse>;
}
