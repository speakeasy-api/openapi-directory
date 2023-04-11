import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for the finance information related to the taxation item.
 *
 * @remarks
 *
 */
export declare class GETCMTaxItemTypeNewFinanceInformation extends SpeakeasyBase {
    /**
     * The accounting code that maps to an on account in your accounting system.
     *
     * @remarks
     *
     */
    onAccountAccountingCode?: string;
    /**
     * The type of the accounting code that maps to an on account in your accounting system.
     *
     * @remarks
     *
     */
    onAccountAccountingCodeType?: string;
    /**
     * The accounting code for the sales taxes payable.
     *
     * @remarks
     *
     */
    salesTaxPayableAccountingCode?: string;
    /**
     * The type of the accounting code for the sales taxes payable.
     *
     * @remarks
     *
     */
    salesTaxPayableAccountingCodeType?: string;
}
/**
 * The type of the tax rate.
 *
 * @remarks
 *
 */
export declare enum GETCMTaxItemTypeNewTaxRateTypeEnum {
    Percentage = "Percentage",
    FlatFee = "FlatFee"
}
/**
 * Container for custom fields of a Credit Taxation Item object.
 *
 * @remarks
 *
 */
export declare class GETCMTaxItemTypeNew extends SpeakeasyBase {
    /**
     * The applied amount of the taxation item.
     *
     * @remarks
     *
     */
    appliedAmount?: number;
    /**
     * The amount of taxes or VAT for which the customer has an exemption.
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
    financeInformation?: GETCMTaxItemTypeNewFinanceInformation;
    /**
     * The ID of the taxation item.
     *
     * @remarks
     *
     */
    id?: string;
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
     * The name of the taxation item.
     *
     * @remarks
     *
     */
    name?: string;
    /**
     * The amount of the refund on the taxation item.
     *
     * @remarks
     *
     */
    refundAmount?: number;
    /**
     * The ID of the source taxation item.
     *
     * @remarks
     *
     */
    sourceTaxItemId?: string;
    /**
     * The amount of taxation.
     *
     * @remarks
     *
     */
    taxAmount?: number;
    /**
     * The tax code identifies which tax rules and tax rates to apply to a specific credit memo.
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
     * The date that the tax is applied to the credit memo, in `yyyy-mm-dd` format.
     *
     * @remarks
     *
     */
    taxDate?: Date;
    /**
     * The tax rate applied to the credit memo.
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
     * The type of the tax rate.
     *
     * @remarks
     *
     */
    taxRateType?: GETCMTaxItemTypeNewTaxRateTypeEnum;
    /**
     * The unapplied amount of the taxation item.
     *
     * @remarks
     *
     */
    unappliedAmount?: number;
}
