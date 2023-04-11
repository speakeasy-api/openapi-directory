import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Accounting code type. You cannot create new accounting codes of type `AccountsReceivable`.
 *
 * @remarks
 *
 * Note that `On-Account Receivable` is only available if you enable the Invoice Settlement feature.
 *
 */
export declare enum POSTAccountingCodeTypeTypeEnum {
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
 * Container for custom fields of an Accounting Code object.
 *
 * @remarks
 *
 */
export declare class POSTAccountingCodeType extends SpeakeasyBase {
    /**
     * Name of the account in your general ledger.
     *
     * @remarks
     *
     * Field only available if you have Zuora Finance enabled. Maximum of 255 characters.
     *
     */
    glAccountName?: string;
    /**
     * Account number in your general ledger.
     *
     * @remarks
     *
     * Field only available if you have Zuora Finance enabled. Maximum of 255 characters.
     *
     */
    glAccountNumber?: string;
    /**
     * Name of the accounting code.
     *
     * @remarks
     *
     * Accounting code name must be unique. Maximum of 100 characters.
     *
     */
    name: string;
    /**
     * Maximum of 2,000 characters.
     *
     * @remarks
     *
     */
    notes?: string;
    /**
     * Accounting code type. You cannot create new accounting codes of type `AccountsReceivable`.
     *
     * @remarks
     *
     * Note that `On-Account Receivable` is only available if you enable the Invoice Settlement feature.
     *
     */
    type: POSTAccountingCodeTypeTypeEnum;
}
