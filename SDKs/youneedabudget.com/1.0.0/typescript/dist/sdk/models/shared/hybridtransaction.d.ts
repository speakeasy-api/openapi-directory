import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The cleared status of the transaction
 */
export declare enum HybridTransactionClearedEnum {
    Cleared = "cleared",
    Uncleared = "uncleared",
    Reconciled = "reconciled"
}
/**
 * If the transaction is a debt/loan account transaction, the type of transaction
 */
export declare enum HybridTransactionDebtTransactionTypeEnum {
    Payment = "payment",
    Refund = "refund",
    Fee = "fee",
    Interest = "interest",
    Escrow = "escrow",
    BalancedAdjustment = "balancedAdjustment",
    Credit = "credit",
    Charge = "charge",
    Null = "null"
}
/**
 * The transaction flag
 */
export declare enum HybridTransactionFlagColorEnum {
    Red = "red",
    Orange = "orange",
    Yellow = "yellow",
    Green = "green",
    Blue = "blue",
    Purple = "purple",
    Null = "null"
}
/**
 * Whether the hybrid transaction represents a regular transaction or a subtransaction
 */
export declare enum HybridTransactionTypeEnum {
    Transaction = "transaction",
    Subtransaction = "subtransaction"
}
export declare class HybridTransaction extends SpeakeasyBase {
    accountId: string;
    accountName: string;
    /**
     * The transaction amount in milliunits format
     */
    amount: number;
    /**
     * Whether or not the transaction is approved
     */
    approved: boolean;
    categoryId?: string;
    categoryName?: string;
    /**
     * The cleared status of the transaction
     */
    cleared: HybridTransactionClearedEnum;
    /**
     * The transaction date in ISO format (e.g. 2016-12-01)
     */
    date: Date;
    /**
     * If the transaction is a debt/loan account transaction, the type of transaction
     */
    debtTransactionType?: HybridTransactionDebtTransactionTypeEnum;
    /**
     * Whether or not the transaction has been deleted.  Deleted transactions will only be included in delta requests.
     */
    deleted: boolean;
    /**
     * The transaction flag
     */
    flagColor?: HybridTransactionFlagColorEnum;
    id: string;
    /**
     * If the transaction was imported, this field is a unique (by account) import identifier.  If this transaction was imported through File Based Import or Direct Import and not through the API, the import_id will have the format: 'YNAB:[milliunit_amount]:[iso_date]:[occurrence]'.  For example, a transaction dated 2015-12-30 in the amount of -$294.23 USD would have an import_id of 'YNAB:-294230:2015-12-30:1'.  If a second transaction on the same account was imported and had the same date and same amount, its import_id would be 'YNAB:-294230:2015-12-30:2'.
     */
    importId?: string;
    /**
     * If the transaction was imported, the payee name that was used when importing and before applying any payee rename rules
     */
    importPayeeName?: string;
    /**
     * If the transaction was imported, the original payee name as it appeared on the statement
     */
    importPayeeNameOriginal?: string;
    /**
     * If transaction is matched, the id of the matched transaction
     */
    matchedTransactionId?: string;
    memo?: string;
    /**
     * For subtransaction types, this is the id of the parent transaction.  For transaction types, this id will be always be null.
     */
    parentTransactionId?: string;
    payeeId?: string;
    payeeName?: string;
    /**
     * If a transfer transaction, the account to which it transfers
     */
    transferAccountId?: string;
    /**
     * If a transfer transaction, the id of transaction on the other side of the transfer
     */
    transferTransactionId?: string;
    /**
     * Whether the hybrid transaction represents a regular transaction or a subtransaction
     */
    type: HybridTransactionTypeEnum;
}
