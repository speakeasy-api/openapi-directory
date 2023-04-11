import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The category associated with the accounting code.
 *
 * @remarks
 *
 */
export declare enum GETAccountingCodeItemTypeCategoryEnum {
    Assets = "Assets",
    Liabilities = "Liabilities",
    Equity = "Equity",
    Revenue = "Revenue",
    Expenses = "Expenses"
}
/**
 * The accounting code status.
 *
 * @remarks
 *
 */
export declare enum GETAccountingCodeItemTypeStatusEnum {
    Active = "Active",
    Inactive = "Inactive"
}
/**
 * Accounting code type.
 *
 * @remarks
 *
 * Note that `On-Account Receivable` is only available if you enable the Invoice Settlement feature.
 *
 */
export declare enum GETAccountingCodeItemTypeTypeEnum {
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
export declare class GETAccountingCodeItemType extends SpeakeasyBase {
    /**
     * The category associated with the accounting code.
     *
     * @remarks
     *
     */
    category?: GETAccountingCodeItemTypeCategoryEnum;
    /**
     * The ID of the user who created the accounting code.
     *
     * @remarks
     *
     */
    createdBy?: string;
    /**
     * Date and time when the accounting code was created.
     *
     * @remarks
     *
     */
    createdOn?: Date;
    /**
     * Name of the account in your general ledger.
     *
     * @remarks
     *
     * Field only available if you have Zuora Finance enabled.
     *
     */
    glAccountName?: string;
    /**
     * Account number in your general ledger.
     *
     * @remarks
     *
     * Field only available if you have Zuora Finance enabled.
     *
     */
    glAccountNumber?: string;
    /**
     * ID of the accounting code.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * Name of the accounting code.
     *
     * @remarks
     *
     */
    name?: string;
    /**
     * Any optional notes for the accounting code.
     *
     * @remarks
     *
     */
    notes?: string;
    /**
     * The accounting code status.
     *
     * @remarks
     *
     */
    status?: GETAccountingCodeItemTypeStatusEnum;
    /**
     * Returns `true` if the request was processed successfully.
     *
     * @remarks
     *
     */
    success?: boolean;
    /**
     * Accounting code type.
     *
     * @remarks
     *
     * Note that `On-Account Receivable` is only available if you enable the Invoice Settlement feature.
     *
     */
    type?: GETAccountingCodeItemTypeTypeEnum;
    /**
     * The ID of the user who last updated the accounting code.
     *
     * @remarks
     *
     */
    updatedBy?: string;
    /**
     * Date and time when the accounting code was last updated.
     *
     * @remarks
     *
     */
    updatedOn?: Date;
}
