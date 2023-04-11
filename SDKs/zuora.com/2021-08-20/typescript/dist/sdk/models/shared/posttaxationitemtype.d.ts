import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The tax mode of the invoice item, indicating whether the amount of the invoice item includes tax.
 *
 * @remarks
 *
 */
export declare enum PostTaxationItemTypeTaxModeEnum {
    TaxInclusive = "TaxInclusive",
    TaxExclusive = "TaxExclusive"
}
/**
 * The type of the tax rate applied to the invoice item.
 *
 * @remarks
 *
 */
export declare enum PostTaxationItemTypeTaxRateTypeEnum {
    Percentage = "Percentage",
    FlatFee = "FlatFee"
}
/**
 * Container for custom fields of a Taxation Item object.
 *
 * @remarks
 *
 */
export declare class PostTaxationItemType extends SpeakeasyBase {
    /**
     * The amount of taxes or VAT, for which your customer has an exemption.
     *
     * @remarks
     *
     */
    exemptAmount?: string;
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
     * The name of taxation.
     *
     * @remarks
     *
     */
    name: string;
    /**
     * The amount of the taxation item in the invoice item.
     *
     * @remarks
     *
     */
    taxAmount: string;
    /**
     * The tax code identifies which tax rules and tax rates to apply to a specific invoice item.
     *
     * @remarks
     *
     */
    taxCode: string;
    /**
     * The description of the tax code.
     *
     * @remarks
     *
     */
    taxCodeDescription?: string;
    /**
     * The date that the tax is applied to the invoice item, in `yyyy-mm-dd` format.
     *
     * @remarks
     *
     */
    taxDate: Date;
    /**
     * The tax mode of the invoice item, indicating whether the amount of the invoice item includes tax.
     *
     * @remarks
     *
     */
    taxMode: PostTaxationItemTypeTaxModeEnum;
    /**
     * The tax rate applied to the invoice item.
     *
     * @remarks
     *
     */
    taxRate: string;
    /**
     * The description of the tax rate.
     *
     * @remarks
     *
     */
    taxRateDescription?: string;
    /**
     * The type of the tax rate applied to the invoice item.
     *
     * @remarks
     *
     */
    taxRateType: PostTaxationItemTypeTaxRateTypeEnum;
}
