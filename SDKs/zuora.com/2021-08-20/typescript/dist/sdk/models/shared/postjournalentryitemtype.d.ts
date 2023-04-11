import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Accounting code type. This field is required if `accountingCodeName` is not unique.
 *
 * @remarks
 *
 * Note that `On-Account Receivable` is only available if you enable the Invoice Settlement feature.
 *
 */
export declare enum POSTJournalEntryItemTypeAccountingCodeTypeEnum {
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
export declare enum POSTJournalEntryItemTypeTypeEnum {
    Credit = "Credit",
    Debit = "Debit"
}
/**
 * Container for custom fields of a Journal Entry Item object.
 *
 * @remarks
 *
 */
export declare class POSTJournalEntryItemType extends SpeakeasyBase {
    /**
     * Name of the accounting code.
     *
     * @remarks
     *
     */
    accountingCodeName: string;
    /**
     * Accounting code type. This field is required if `accountingCodeName` is not unique.
     *
     * @remarks
     *
     * Note that `On-Account Receivable` is only available if you enable the Invoice Settlement feature.
     *
     */
    accountingCodeType?: POSTJournalEntryItemTypeAccountingCodeTypeEnum;
    /**
     * Journal entry item amount in transaction currency.
     *
     * @remarks
     *
     */
    amount: string;
    /**
     * Journal entry item amount in home currency.
     *
     * @remarks
     *
     * This field is required if you have set your home currency for foreign currency conversion. Otherwise, do not pass this field.
     *
     */
    homeCurrencyAmount?: string;
    /**
     * Type of journal entry item.
     */
    type: POSTJournalEntryItemTypeTypeEnum;
}
