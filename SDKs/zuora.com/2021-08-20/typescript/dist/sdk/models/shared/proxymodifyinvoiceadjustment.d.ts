import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates the status of the adjustment's transfer to an external accounting system, such as NetSuite.
 *
 * @remarks
 *
 */
export declare enum ProxyModifyInvoiceAdjustmentTransferredToAccountingEnum {
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
export declare class ProxyModifyInvoiceAdjustment extends SpeakeasyBase {
    /**
     *  A code identifying the reason for the transaction. Must be an existing reason code or empty. If you do not specify a value, Zuora uses the default reason code.
     *
     * @remarks
     * **Character limit**: 32 **V****alues**: a valid reason code
     */
    reasonCode?: string;
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
    transferredToAccounting?: ProxyModifyInvoiceAdjustmentTransferredToAccountingEnum;
}
