import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for the finance information related to the taxation item.
 *
 * @remarks
 *
 */
export declare class GETTaxationItemTypewithSuccessFinanceInformation extends SpeakeasyBase {
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
 * The type of the tax rate applied to the credit or debit memo.
 *
 * @remarks
 *
 */
export declare enum GETTaxationItemTypewithSuccessTaxRateTypeEnum {
    Percentage = "Percentage",
    FlatFee = "FlatFee"
}
/**
 * Container for custom fields of a Taxation Item object.
 *
 * @remarks
 *
 */
export declare class GETTaxationItemTypewithSuccess extends SpeakeasyBase {
    /**
     * The ID of the Zuora user who created the taxation item.
     *
     * @remarks
     *
     */
    createdById?: string;
    /**
     * The date and time when the taxation item was created in the Zuora system, in `yyyy-mm-dd hh:mm:ss` format.
     *
     * @remarks
     *
     */
    createdDate?: Date;
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
    financeInformation?: GETTaxationItemTypewithSuccessFinanceInformation;
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
     * The ID of the credit or debit memo associated with the taxation item.
     *
     * @remarks
     *
     */
    memoItemId?: string;
    /**
     * The name of the taxation item.
     *
     * @remarks
     *
     */
    name?: string;
    /**
     * The ID of the taxation item of the invoice, which the credit or debit memo is created from.
     *
     * @remarks
     *
     */
    sourceTaxItemId?: string;
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
    taxRateType?: GETTaxationItemTypewithSuccessTaxRateTypeEnum;
    /**
     * The ID of the Zuora user who last updated the taxation item.
     *
     * @remarks
     *
     */
    updatedById?: string;
    /**
     * The date and time when the taxation item was last updated, in `yyyy-mm-dd hh:mm:ss` format.
     *
     * @remarks
     *
     */
    updatedDate?: Date;
}
