import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for custom fields of a Taxation Item object.
 *
 * @remarks
 *
 */
export declare class ProxyGetTaxationItem extends SpeakeasyBase {
    /**
     *  The Chart of Accounts
     */
    accountingCode?: string;
    /**
     *  The ID of the user who created the taxation item.
     *
     * @remarks
     * **Character limit**: 32 **Values**: automatically generated
     */
    createdById?: string;
    /**
     *  The date when the payment was created in the Zuora system.
     *
     * @remarks
     * **Character limit**: 29 **Values**: automatically generated
     */
    createdDate?: Date;
    /**
     *  The calculated tax amount excluded due to the exemption.
     *
     * @remarks
     * **Character limit**: 16 **Values**: a decimal value
     */
    exemptAmount?: number;
    /**
     * Object identifier.
     */
    id?: string;
    /**
     *  The ID of the specific invoice item that the taxation information applies to.
     *
     * @remarks
     * **Character limit**: 32 **Values**: a valid invoice item ID
     */
    invoiceItemId?: string;
    /**
     *  The jurisdiction that applies the tax or VAT. This value is typically a state, province, county, or city.
     *
     * @remarks
     * **Character limit**: 32 **Values**: a string of 32 characterrs or fewer
     */
    jurisdiction?: string;
    /**
     *  The identifier for the location based on the value of the `TaxCode` field.
     *
     * @remarks
     * **Character limit**: 32 **Values**: automatically generated
     */
    locationCode?: string;
    /**
     *  The name of the tax rate, such as sales tax or GST. This name is displayed on invoices.
     *
     * @remarks
     * **Character limit**: 128 **Values**: a string of 128 characters or fewer
     */
    name?: string;
    /**
     *  The amount of the tax applied to the charge.
     *
     * @remarks
     * **Character limit**: 16 **Values**: a decimal value
     */
    taxAmount?: number;
    /**
     *  The tax code identifies which tax rules and tax rates to apply to a specific charge.
     *
     * @remarks
     * **Character limit**: 32 **Values**: a string of 32 characters or fewer
     */
    taxCode?: string;
    /**
     *  The description for the tax code.
     *
     * @remarks
     * **Character limit**: 255 **Values**: a string of 255 characters or fewer
     */
    taxCodeDescription?: string;
    /**
     *  The date that the tax is applied to the charge, in `yyyy-mm-dd` format.
     *
     * @remarks
     * **Character limit**: 29
     */
    taxDate?: Date;
    /**
     *  The tax rate applied to the charge.
     *
     * @remarks
     * **Character limit**: 16 **Values**: a valid decimal value
     */
    taxRate?: number;
    /**
     *  The description of the tax rate.
     *
     * @remarks
     * **Character limit**: 255 **Values**: a string of 255 characters or fewer
     */
    taxRateDescription?: string;
    /**
     *  The type of the tax rate applied to the charge.
     *
     * @remarks
     * **Character limit**: 10 **Values**: `Percentage`, `FlatFee`
     */
    taxRateType?: string;
    /**
     *  The ID of the user who last updated the taxation item.
     *
     * @remarks
     * **Character limit**: **Values**: automatically generated
     */
    updatedById?: string;
    /**
     * The date when the taxation item was last updated. **Character limit**: **Values**: automatically generated
     */
    updatedDate?: Date;
}
