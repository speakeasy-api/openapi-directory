import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for the finance information related to the taxation item.
 *
 * @remarks
 *
 */
export declare class PUTTaxationItemTypeFinanceInformation extends SpeakeasyBase {
    /**
     * The accounting code that maps to an on account in your accounting system.
     *
     * @remarks
     *
     */
    onAccountAccountingCode?: string;
    /**
     * The accounting code for the sales taxes payable.
     *
     * @remarks
     *
     */
    salesTaxPayableAccountingCode?: string;
}
/**
 * The type of the tax rate applied to the credit or debit memo.
 *
 * @remarks
 *
 */
export declare enum PUTTaxationItemTypeTaxRateTypeEnum {
    Percentage = "Percentage",
    FlatFee = "FlatFee"
}
/**
 * Container for custom fields of a Taxation Item object.
 *
 * @remarks
 *
 */
export declare class PUTTaxationItemType extends SpeakeasyBase {
    /**
     * The calculated tax amount excluded due to the exemption.
     *
     * @remarks
     *
     */
    exemptAmount?: number;
    /**
     * Container for the finance information related to the taxation item.
     *
     * @remarks
     *
     */
    financeInformation?: PUTTaxationItemTypeFinanceInformation;
    /**
     * The jurisdiction that applies the tax or VAT. This value is typically a state, province, county, or city.
     *
     * @remarks
     *
     */
    jurisdiction?: string;
    /**
     * The identifier for the location based on the value of the `taxCode` field.
     *
     * @remarks
     *
     */
    locationCode?: string;
    /**
     * The name of the taxation item to be updated.
     *
     * @remarks
     *
     */
    name?: string;
    /**
     * The amount of the tax applied to the credit or debit memo.
     *
     * @remarks
     *
     */
    taxAmount?: number;
    /**
     * The tax code identifies which tax rules and tax rates to apply to a specific credit or debit memo.
     *
     * @remarks
     *
     */
    taxCode?: string;
    /**
     * The description of the tax code.
     *
     * @remarks
     *
     */
    taxCodeDescription?: string;
    /**
     * The date when the tax is applied to the credit or debit memo.
     *
     * @remarks
     *
     */
    taxDate?: Date;
    /**
     * The tax rate applied to the credit or debit memo.
     *
     * @remarks
     *
     */
    taxRate?: number;
    /**
     * The description of the tax rate.
     *
     * @remarks
     *
     */
    taxRateDescription?: string;
    /**
     * The type of the tax rate applied to the credit or debit memo.
     *
     * @remarks
     *
     */
    taxRateType?: PUTTaxationItemTypeTaxRateTypeEnum;
}
