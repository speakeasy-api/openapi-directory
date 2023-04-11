import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Accounting code type.
 *
 * @remarks
 *
 * Note that `On-Account Receivable` is only available if you enable the Invoice Settlement feature.
 *
 */
export declare enum GETJournalEntryItemTypeAccountingCodeTypeEnum {
    AccountsReceivable = "AccountsReceivable",
    OnAccountReceivable = "On-Account Receivable",
    Cash = "Cash",
    OtherAssets = "OtherAssets",
    CustomerCashOnAccount = "CustomerCashOnAccount",
    DeferredRevenue = "DeferredRevenue",
    SalesTaxPayable = "SalesTaxPayable",
    OtherLiabilities = "OtherLiabilities",
    SalesRevenue = "SalesRevenue",
    SalesDiscounts = "SalesDiscounts",
    OtherRevenue = "OtherRevenue",
    OtherEquity = "OtherEquity",
    BadDebt = "BadDebt",
    OtherExpenses = "OtherExpenses"
}
/**
 * Type of journal entry item.
 */
export declare enum GETJournalEntryItemTypeTypeEnum {
    Credit = "Credit",
    Debit = "Debit"
}
/**
 * Container for custom fields of a Journal Entry Item object.
 *
 * @remarks
 *
 */
export declare class GETJournalEntryItemType extends SpeakeasyBase {
    /**
     * Name of the accounting code.
     *
     * @remarks
     *
     */
    accountingCodeName?: string;
    /**
     * Accounting code type.
     *
     * @remarks
     *
     * Note that `On-Account Receivable` is only available if you enable the Invoice Settlement feature.
     *
     */
    accountingCodeType?: GETJournalEntryItemTypeAccountingCodeTypeEnum;
    /**
     * Journal entry item amount in transaction currency.
     *
     * @remarks
     *
     */
    amount?: string;
    /**
     * The account number in the general ledger (GL) that corresponds to the accounting code.
     *
     * @remarks
     *
     */
    glAccountName?: string;
    /**
     * The account name in the general ledger (GL) that corresponds to the accounting code.
     *
     * @remarks
     *
     */
    glAccountNumber?: string;
    /**
     * Journal entry item amount in home currency.
     *
     * @remarks
     *
     */
    homeCurrencyAmount?: string;
    /**
     * Type of journal entry item.
     */
    type?: GETJournalEntryItemTypeTypeEnum;
}
