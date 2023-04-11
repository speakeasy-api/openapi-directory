import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Accounting code type.
 *
 * @remarks
 *
 * Note that `On-Account Receivable` is only available if you enable the Invoice Settlement feature.
 *
 */
export declare enum PUTJournalEntryItemTypeAccountingCodeTypeEnum {
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
export declare enum PUTJournalEntryItemTypeTypeEnum {
    Credit = "Credit",
    Debit = "Debit"
}
/**
 * Container for custom fields of a Journal Entry Item object.
 *
 * @remarks
 *
 */
export declare class PUTJournalEntryItemType extends SpeakeasyBase {
    /**
     * Name of the accounting code.
     *
     * @remarks
     *
     * If the Journal Entry Item has a blank accounting code, enter the empty string.
     *
     */
    accountingCodeName: string;
    /**
     * Accounting code type.
     *
     * @remarks
     *
     * Note that `On-Account Receivable` is only available if you enable the Invoice Settlement feature.
     *
     */
    accountingCodeType?: PUTJournalEntryItemTypeAccountingCodeTypeEnum;
    /**
     * Type of journal entry item.
     */
    type: PUTJournalEntryItemTypeTypeEnum;
}
