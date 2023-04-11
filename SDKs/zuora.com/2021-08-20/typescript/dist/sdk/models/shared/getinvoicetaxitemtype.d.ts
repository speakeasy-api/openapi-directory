import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the tax rate.
 *
 * @remarks
 *
 */
export declare enum GETInvoiceTaxItemTypeTaxRateTypeEnum {
    Percentage = "Percentage",
    FlatFee = "FlatFee"
}
export declare class GETInvoiceTaxItemType extends SpeakeasyBase {
    /**
     * The amount of the invoice taxation item that is available to credit.
     *
     * @remarks
     *
     */
    availableToCreditAmount?: number;
    /**
     * The balance of the taxation item.
     *
     * @remarks
     *
     */
    balance?: number;
    /**
     * The amount of credit memos applied to the taxation item.
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
     * The amount of payments applied to the taxation item.
     *
     * @remarks
     *
     */
    paymentAmount?: number;
    /**
     * The amount of taxation.
     *
     * @remarks
     *
     */
    taxAmount?: number;
    /**
     * The tax code identifies which tax rules and tax rates to apply to a specific invoice.
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
     * The date that the tax is applied to the invoice, in `yyyy-mm-dd` format.
     *
     * @remarks
     *
     */
    taxDate?: Date;
    /**
     * The tax rate applied to the invoice.
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
    taxRateType?: GETInvoiceTaxItemTypeTaxRateTypeEnum;
}
