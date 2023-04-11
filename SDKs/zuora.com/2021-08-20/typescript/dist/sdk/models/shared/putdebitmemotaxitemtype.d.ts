import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for the finance information related to the taxation item in the debit memo item.
 *
 * @remarks
 *
 */
export declare class PutDebitMemoTaxItemTypeFinanceInformation extends SpeakeasyBase {
    /**
     * The accounting code for the sales taxes payable.
     *
     * @remarks
     *
     */
    salesTaxPayableAccountingCode?: string;
}
/**
 * The type of the tax rate applied to the debit memo.
 *
 * @remarks
 *
 */
export declare enum PutDebitMemoTaxItemTypeTaxRateTypeEnum {
    Percentage = "Percentage",
    FlatFee = "FlatFee"
}
/**
 * Container for custom fields of a Debit Taxation Item object.
 *
 * @remarks
 *
 */
export declare class PutDebitMemoTaxItemType extends SpeakeasyBase {
    /**
     * The amount of the taxation item in the debit memo item.
     *
     * @remarks
     *
     */
    amount?: number;
    /**
     * Container for the finance information related to the taxation item in the debit memo item.
     *
     * @remarks
     *
     */
    financeInformation?: PutDebitMemoTaxItemTypeFinanceInformation;
    /**
     * The ID of the taxation item in the debit memo item.
     *
     * @remarks
     *
     */
    id: string;
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
     * The amount of taxes or VAT for which the customer has an exemption.
     *
     * @remarks
     *
     */
    taxExemptAmount?: number;
    /**
     * The name of taxation.
     *
     * @remarks
     *
     */
    taxName?: string;
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
     * The type of the tax rate applied to the debit memo.
     *
     * @remarks
     *
     */
    taxRateType?: PutDebitMemoTaxItemTypeTaxRateTypeEnum;
}
