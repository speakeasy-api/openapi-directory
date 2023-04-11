import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for custom fields of an Invoice Item object.
 *
 * @remarks
 *
 */
export declare class ProxyGetInvoiceItem extends SpeakeasyBase {
    /**
     *  The accounting code for the item's charge. Accounting codes group transactions that contain similar accounting attributes.
     *
     * @remarks
     * **Character limit**: 100 **Values**: inherited from `RatePlanCharge.AccountingCode`
     */
    accountingCode?: string;
    /**
     *  Associates a discount invoice item to a specific invoice item.
     *
     * @remarks
     *
     * **Character limit**: 32
     *
     * **Values**: inherited from `InvoiceItem.Id` for the invoice item that the discount charge is applied to
     */
    appliedToInvoiceItemId?: string;
    /**
     *  The amount being charged for the invoice item. This amount doesn't include taxes regardless if the charge's tax mode is inclusive or exclusive.
     *
     * @remarks
     * **Character limit**: **Values**: automatically calculated from multiple fields in multiple objects
     */
    chargeAmount?: number;
    /**
     *  The date when the Invoice Item is created .
     *
     * @remarks
     * **Character limit**: 29 **Values**: automatically generated
     */
    chargeDate?: Date;
    /**
     *  The name of the invoice item's charge.
     *
     * @remarks
     * **Character limi**t: 50 **Values: **inherited from `RatePlanCharge.Name`
     */
    chargeName?: string;
    /**
     *  The user ID of the person who created the invoice item.
     *
     * @remarks
     * **Character limit**: 32 **Values**: automatically generated
     */
    createdById?: string;
    /**
     *  The date the invoice item was created.
     *
     * @remarks
     * **Character limit:** 29 **Values**: automatically generated
     */
    createdDate?: Date;
    /**
     * Object identifier.
     */
    id?: string;
    /**
     * ID of the corresponding object in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    integrationIdNS?: string;
    /**
     * Status of the invoice item's synchronization with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    integrationStatusNS?: string;
    /**
     *  The ID of the invoice that's associated with this invoice item.
     *
     * @remarks
     * **Character limit**: 32 **Values**: inherited from `Invoice.Id`
     */
    invoiceId?: string;
    /**
     *  Identifies the kind of charge where 0 is a charge, 1 is a discount, 2 is a prepayment, and 3 is a tax. The returned value is text not decimal on data sources.
     *
     * @remarks
     * **Character limit**: **Values: **
     *
     * - 0: charge
     * - 1: discount
     * - 2: prepayment
     * - 3: tax
     *
     */
    processingType?: number;
    /**
     *  A description of the product associated with this invoice item.
     *
     * @remarks
     *
     * **Character limit**: 500
     *
     * **Values**: inherited from `Product.Description`
     *
     * **Note**: This value changes if `Product.Description` is updated. The values of `UpdatedById` and `UpdatedDate` for the `InvoiceItem` do not change when `Product.Description` is updated.
     */
    productDescription?: string;
    /**
     *  The name of the product associated with this invoice item.
     *
     * @remarks
     *
     * **Character limit**: 255
     *
     * **Values**: inherited from `Product.Name`
     *
     * **Note**: This value changes if `Product.Name` is updated. The values of `UpdatedById` and `UpdatedDate` for the `InvoiceItem` do not change when `Product.Name` is updated.
     */
    productName?: string;
    /**
     *  The number of units for this invoice item.
     *
     * @remarks
     * **Values**: inherited from `RatePlanCharge.Quantity`
     */
    quantity?: number;
    /**
     *  The ID of the rate plan charge that's associated with this invoice item.
     *
     * @remarks
     * **Character limit**: 32 **Values**: inherited from `RatePlanCharge.Id`
     */
    ratePlanChargeId?: string;
    /**
     *  The date when revenue recognition is triggered.
     *
     * @remarks
     * **Character limit**: 29 **Values**: generated from `InvoiceItem.RevRecTriggerCondition`
     */
    revRecStartDate?: Date;
    /**
     *  The unique SKU for the product associated with this invoice item.
     *
     * @remarks
     * **Character limit**: 255 **Values**: inherited from `Product.SKU`
     */
    sku?: string;
    /**
     *  The end date of the service period associated with this invoice item. Service ends one second before the date in this value.
     *
     * @remarks
     * **Character limit**: 29 **Values**: automatically generated
     */
    serviceEndDate?: Date;
    /**
     *  The start date of the service period associated with this invoice item. If the associated charge is a one-time fee, then this date is the date of that charge.
     *
     * @remarks
     * **Character limit:** 29 **Values**: automatically generated
     */
    serviceStartDate?: Date;
    /**
     *  The ID of the subscription associated with the invoice item.
     *
     * @remarks
     * **Character limit**: 32 **Values**: inherited from `Subscription.Id`
     */
    subscriptionId?: string;
    /**
     * Date when the invoice item was synchronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    syncDateNS?: string;
    /**
     *  The amount of tax applied to the invoice item's charge.
     *
     * @remarks
     * **Character limit**: **Values**: calculated from multiple fields in the ProductRatePlanCharge object
     */
    taxAmount?: number;
    /**
     *  Specifies the tax code for taxation rules.
     *
     * @remarks
     * **Character limit**: 6 **Values**: inherited from `ProductRatePlanCharge.TaxCode`
     */
    taxCode?: string;
    /**
     *  The amount of the invoice item's charge that's tax exempt.
     *
     * @remarks
     * **Character limit**: **Values**: calculated from multiple fields in the ProductRatePlanCharge object
     */
    taxExemptAmount?: number;
    /**
     *  The tax mode of the invoice item.
     *
     * @remarks
     * **Character limit**: 12 **Values**: `TaxExclusive`, `TaxInclusive`
     */
    taxMode?: string;
    /**
     *  Specifies the units to measure usage. **Character limit**: **Values**: inherited from `ProductRatePlanCharge.UOM`
     */
    uom?: string;
    /**
     *  The per-unit price of the invoice item.
     *
     * @remarks
     * **Character limit**: **Values**: calculated from multiple fields in ProductRatePlanCharge and ProductRatePlanChargeTier objets
     */
    unitPrice?: number;
    /**
     *  The ID of the user who last updated the invoice item.
     *
     * @remarks
     * **Character limit**: 32 **Values**: automatically generated
     */
    updatedById?: string;
    /**
     *  The date when the invoice item was last updated.
     *
     * @remarks
     * **Character limit**: 29 **Values**: automatically generated
     */
    updatedDate?: Date;
}
