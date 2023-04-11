import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for the finance information related to the taxation item.
 *
 * @remarks
 *
 */
export declare class GETDMTaxItemTypeFinanceInformation extends SpeakeasyBase {
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
export declare enum GETDMTaxItemTypeTaxRateTypeEnum {
    Percentage = "Percentage",
    FlatFee = "FlatFee"
}
/**
 * Container for custom fields of a Debit Taxation Item object.
 *
 * @remarks
 *
 */
export declare class GETDMTaxItemType extends SpeakeasyBase {
    /**
     * The applied amount of the taxation item.
     *
     * @remarks
     *
     */
    appliedAmount?: number;
    /**
     * The amount of credit memos applied to the debit memo.
     *
     * @remarks
     *
     */
    creditAmount?: number;
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
    financeInformation?: GETDMTaxItemTypeFinanceInformation;
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
     * The amount of payments applied to the debit memo.
     *
     * @remarks
     *
     */
    paymentAmount?: number;
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
     * The tax code identifies which tax rules and tax rates to apply to a specific debit memo.
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
     * The date that the tax is applied to the debit memo, in `yyyy-mm-dd` format.
     *
     * @remarks
     *
     */
    taxDate?: Date;
    /**
     * The tax rate applied to the debit memo.
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
    taxRateType?: GETDMTaxItemTypeTaxRateTypeEnum;
    /**
     * The unapplied amount of the taxation item.
     *
     * @remarks
     *
     */
    unappliedAmount?: number;
}
