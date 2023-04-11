import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates the status of the adjustment's transfer to an external accounting system, such as NetSuite.
 *
 * @remarks
 *
 */
export declare enum ProxyGetInvoiceItemAdjustmentTransferredToAccountingEnum {
    Processing = "Processing",
    Yes = "Yes",
    No = "No",
    Error = "Error",
    Ignore = "Ignore"
}
/**
 * Container for custom fields of an Invoice Item Adjustment object.
 *
 * @remarks
 *
 */
export declare class ProxyGetInvoiceItemAdjustment extends SpeakeasyBase {
    /**
     *  The ID of the account that owns the invoice.
     *
     * @remarks
     * **Values**: inherited from `Account.ID` for the invoice owner
     */
    accountId?: string;
    /**
     *  The accounting code for the invoice item. Accounting codes group transactions that contain similar accounting attributes.
     *
     * @remarks
     * **Character limit**: 100 **Values**: inherited from `InvoiceItem.AccountingCode`
     */
    accountingCode?: string;
    /**
     *  The date when the invoice item adjustment is applied, in `yyyy-mm-dd` format. This date must be the same as the invoice's date or later.
     *
     * @remarks
     * **Character limit**: 29
     */
    adjustmentDate?: Date;
    /**
     *  A unique string to identify an individual invoice item adjustment.
     *
     * @remarks
     * **Character limit**: 255 **Values**: automatically generated
     */
    adjustmentNumber?: string;
    /**
     *  The amount of the invoice item adjustment. The value of Amount must be positive. Use the required parameter Type to either credit or charge (debit) this amount on the invoice. **Character limit**: 16 **Values**: a valid currency amount
     */
    amount?: number;
    /**
     *  The ID of the Zuora user who canceled the invoice item adjustment. Zuora generates this read-only field only if the adjustment is canceled.
     *
     * @remarks
     * **Character limit**: 32 **Values**: automatically generated
     */
    cancelledById?: string;
    /**
     *  The date when the invoice item adjustment is canceled. Zuora generates this read-only field if this adjustment is canceled.
     *
     * @remarks
     * **Character limit**: 29 **Values**: automatically generated
     */
    cancelledDate?: Date;
    /**
     *  Use this field to record comments about the invoice item adjustment.
     *
     * @remarks
     * **Character limit**: 255 **Values**: a string of 255 characters or fewer
     */
    comment?: string;
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
     * **Character limit**: 29 **Values**: automatically generated
     */
    createdDate?: Date;
    /**
     *  The name of the account that owns the associated invoice.
     *
     * @remarks
     *
     * **Character limit**: 50
     *
     * **Values**: inherited from `Account.Name`
     *
     * **Note**: This value changes if `Account.Name` is updated. The values of `UpdatedById` and `UpdatedDate` for the `InvoiceItemAdjustment` do not change when `Account.Name` is updated.
     */
    customerName?: string;
    /**
     *  The unique account number of the customer's account.
     *
     * @remarks
     *
     * **Character limit**: 50
     *
     * **Values**: inherited from `Account.AccountNumber`
     *
     * **Note**: This value changes if `Account.AccountNumber` is updated. The values of `UpdatedById` and `UpdatedDate` for the `InvoiceItemAdjustment` do not change when `Account.AccountNumber` is updated.
     */
    customerNumber?: string;
    /**
     * Object identifier.
     */
    id?: string;
    /**
     *  The ID of the invoice associated with the adjustment. The adjustment invoice item is in this invoice. This field is optional if you specify a value for the `InvoiceNumber` field.
     *
     * @remarks
     * **Character limit**: 3 **Values**: a valid invoice ID
     */
    invoiceId?: string;
    /**
     * ID of the corresponding object in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    invoiceItemAdjustmentIntegrationIdNS?: string;
    /**
     * Status of the invoice item adjustment's synchronization with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    invoiceItemAdjustmentIntegrationStatusNS?: string;
    /**
     * Date when the invoice item adjustment was synchronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    invoiceItemAdjustmentSyncDateNS?: string;
    /**
     *  The name of the invoice item's charge. This field is required in the Query call, but is inherited in other calls.
     *
     * @remarks
     * **Character limit**: 255 **Values**: inherited from `InvoiceItem.ChargeName`
     */
    invoiceItemName?: string;
    /**
     *  The unique identification number for the invoice that contains the invoice item. This field is optional if you specify a value for the `InvoiceId` field.
     *
     * @remarks
     * **Character limit**: 32 **Values**: a valid invoice number
     */
    invoiceNumber?: string;
    /**
     *  A code identifying the reason for the transaction. Must be an existing reason code or empty. If you do not specify a value, Zuora uses the default reason code.
     *
     * @remarks
     * **Character limit**: 32 **V****alues**: a valid reason code
     */
    reasonCode?: string;
    /**
     *  A code to reference an object external to Zuora. For example, you can use this field to reference a case number in an external system.
     *
     * @remarks
     * **Character limit**: 60 **Values**: a string of 60 characters or fewer
     */
    referenceId?: string;
    /**
     *  The end date of the service period associated with the invoice item. Service ends one second before the date in this value.
     *
     * @remarks
     *
     * **Character limit**: 29
     */
    serviceEndDate?: Date;
    /**
     *  The start date of the service period associated with the invoice item. Service ends one second before the date in this value.
     *
     * @remarks
     *
     * **Character limit**: 29
     */
    serviceStartDate?: Date;
    /**
     *  The ID of the item specified in the SourceType field.
     *
     * @remarks
     * **Character limit**: 32 **Values**: a valid invoice item ID or taxation item ID
     */
    sourceId?: string;
    /**
     *  The type of adjustment.
     *
     * @remarks
     * **Character limit**: 13 **Values**: InvoiceDetail, Tax
     */
    sourceType?: string;
    /**
     *  The status of the invoice item adjustment. This field is required in the Query call, but is automatically generated in other calls.
     *
     * @remarks
     * **Character limit**: 9 **Values**: Canceled, Processed
     */
    status?: string;
    /**
     * Indicates the status of the adjustment's transfer to an external accounting system, such as NetSuite.
     *
     * @remarks
     *
     */
    transferredToAccounting?: ProxyGetInvoiceItemAdjustmentTransferredToAccountingEnum;
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
