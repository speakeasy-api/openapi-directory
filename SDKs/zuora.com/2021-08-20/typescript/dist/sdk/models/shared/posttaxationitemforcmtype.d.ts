import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for the finance information related to the taxation item.
 *
 * @remarks
 *
 */
export declare class POSTTaxationItemForCMTypeFinanceInformation extends SpeakeasyBase {
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
 * The type of the tax rate applied to the credit memo.
 *
 * @remarks
 *
 */
export declare enum POSTTaxationItemForCMTypeTaxRateTypeEnum {
    Percentage = "Percentage",
    FlatFee = "FlatFee"
}
/**
 * Container for custom fields of a Taxation Item object.
 *
 * @remarks
 *
 */
export declare class POSTTaxationItemForCMType extends SpeakeasyBase {
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
    financeInformation?: POSTTaxationItemForCMTypeFinanceInformation;
    /**
     * The jurisdiction that applies the tax or VAT. This value is typically a state, province, county, or city.
     *
     * @remarks
     *
     */
    jurisdiction: string;
    /**
     * The identifier for the location based on the value of the `taxCode` field.
     *
     * @remarks
     *
     */
    locationCode?: string;
    /**
     * The ID of the credit memo that the taxation item is created for.
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
    name: string;
    /**
     * The ID of the taxation item of the invoice, which the credit memo is created from.
     *
     * @remarks
     *
     * If you want to use this REST API to create taxation items for a credit memo created from an invoice, the taxation items of the invoice must be created or imported through the SOAP API call.
     *
     * **Note:**
     *   - This field is only used if the credit memo is created from an invoice.
     *   - If you do not contain this field in the request body, Zuora will automatically set a value for the `sourceTaxItemId` field based on the tax location code, tax jurisdiction, and tax rate.
     *
     */
    sourceTaxItemId?: string;
    /**
     * The amount of the tax applied to the credit memo.
     *
     * @remarks
     *
     */
    taxAmount: number;
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
     * The date when the tax is applied to the credit memo.
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
    taxRate: number;
    /**
     * The description of the tax rate.
     *
     * @remarks
     *
     */
    taxRateDescription?: string;
    /**
     * The type of the tax rate applied to the credit memo.
     *
     * @remarks
     *
     */
    taxRateType: POSTTaxationItemForCMTypeTaxRateTypeEnum;
}
