import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates the status of the adjustment's transfer to an external accounting system, such as NetSuite.
 *
 * @remarks
 *
 */
export declare enum ProxyGetInvoiceAdjustmentTransferredToAccountingEnum {
    Processing = "Processing",
    Yes = "Yes",
    No = "No",
    Error = "Error",
    Ignore = "Ignore"
}
/**
 * Container for custom fields of an Invoice Adjustment object.
 *
 * @remarks
 *
 */
export declare class ProxyGetInvoiceAdjustment extends SpeakeasyBase {
    /**
     *  The ID of the account that owns the invoice.
     *
     * @remarks
     * **Character limit**: 32 **Values**: inherited from Account.ID for the invoice owner
     */
    accountId?: string;
    /**
     * The accounting code for the invoice adjustment.
     */
    accountingCode?: string;
    /**
     *  The date when the invoice adjustment is applied. This date must be the same as the invoice's date or later.
     *
     * @remarks
     * **Character limit**: 29 **Values**: Leave null to automatically generate the current date
     */
    adjustmentDate?: Date;
    /**
     *  A unique string to identify an individual invoice adjustment.
     *
     * @remarks
     * **Character limit**: 255 **Values**: automatically generated
     */
    adjustmentNumber?: string;
    /**
     *  The amount of the invoice adjustment.
     *
     * @remarks
     * **Character limit**: 16 **Values**: a valid currency amount
     */
    amount?: number;
    /**
     *  The ID of the Zuora user who canceled the invoice adjustment. Zuora generates this read-only field only if the adjustment is canceled.
     *
     * @remarks
     * **Character limit**: 32 **Values**: automatically generated
     */
    cancelledById?: string;
    /**
     *  The date when the invoice adjustment is canceled. Zuora generates this read-only field if this adjustment is canceled.
     *
     * @remarks
     * **Character limit**: 29 **Values**: automatically generated
     */
    cancelledOn?: Date;
    /**
     *  Use this field to record comments about the invoice adjustment.
     *
     * @remarks
     * **Character limit**: 255 **Values**: a string of 255 characters or fewer
     */
    comments?: string;
    /**
     *  The user ID of the person who created the invoice adjustment.
     *
     * @remarks
     * **Character limit**: 32 **Values**: automatically generated
     */
    createdById?: string;
    /**
     *  The date the invoice adjustment was created.
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
     * **Note**: This value changes if `Account.Name` is updated. The values of `UpdatedById` and `UpdatedDate` for the `InvoiceAdjustment` do not change when `Account.Name` is updated.
     */
    customerName?: string;
    /**
     *  The unique account number of the customer's account.
     *
     * @remarks
     *
     * **Character limit**: 70
     *
     * **Values**: inherited from `Account.AccountNumber`
     *
     * **Note**: This value changes if `Account.AccountNumber` is updated. The values of `UpdatedById` and `UpdatedDate` for the `InvoiceAdjustment` do not change when `Account.AccountNumber` is updated.
     */
    customerNumber?: string;
    /**
     * Object identifier.
     */
    id?: string;
    /**
     *  The amount that changes the balance of the associated invoice.
     *
     * @remarks
     * **Character limit**: 16 **Values**: automatically calculated
     */
    impactAmount?: number;
    /**
     *  The ID of the invoice associated with the adjustment. This field is required if you don't specify a value for the `InvoiceNumber` field.
     *
     * @remarks
     * **Character limit**: 32 **Values**: a valid invoice ID
     */
    invoiceId?: string;
    /**
     *  The unique identification number for the associated invoice. This field is required if you don't specify a value for the `InvoiceId` field.
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
     *  The status of the invoice adjustment. This field is required in the Query call, but is automatically generated in other calls.
     *
     * @remarks
     * **Character limit**: 9 **Values**: `Canceled`, `Processed`
     */
    status?: string;
    /**
     * Indicates the status of the adjustment's transfer to an external accounting system, such as NetSuite.
     *
     * @remarks
     *
     */
    transferredToAccounting?: ProxyGetInvoiceAdjustmentTransferredToAccountingEnum;
    /**
     *  Indicates whether the adjustment credits or debits the invoice amount.
     *
     * @remarks
     * **Character limit**: 6 **Values**: `Credit`, `Charge`
     */
    type?: string;
    /**
     *  The ID of the user who last updated the invoice.
     *
     * @remarks
     * **Character limit**: 32 **Values**: automatically generated
     */
    updatedById?: string;
    /**
     *  The date when the invoice was last updated.
     *
     * @remarks
     * **Character limit**: 29 **Values**: automatically generated
     */
    updatedDate?: Date;
}
