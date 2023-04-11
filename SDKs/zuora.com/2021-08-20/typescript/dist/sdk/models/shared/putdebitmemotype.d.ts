import { SpeakeasyBase } from "../../../internal/utils";
import { PUTDebitMemoItemType } from "./putdebitmemoitemtype";
/**
 * Whether the debit memo is transferred to an external accounting system. Use this field for integration with accounting systems, such as NetSuite.
 *
 * @remarks
 *
 */
export declare enum PUTDebitMemoTypeTransferredToAccountingEnum {
    Processing = "Processing",
    Yes = "Yes",
    No = "No",
    Error = "Error",
    Ignore = "Ignore"
}
/**
 * Container for custom fields of a Debit Memo object.
 *
 * @remarks
 *
 */
export declare class PUTDebitMemoType extends SpeakeasyBase {
    /**
     * ID of the corresponding object in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    integrationIdNS?: string;
    /**
     * Status of the debit memo's synchronization with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    integrationStatusNS?: string;
    /**
     * Date when the debit memo was synchronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    syncDateNS?: string;
    /**
     * Whether debit memos are automatically picked up for processing in the corresponding payment run.
     *
     * @remarks
     *
     * By default, debit memos are automatically picked up for processing in the corresponding payment run.
     *
     */
    autoPay?: boolean;
    /**
     * Comments about the debit memo.
     *
     * @remarks
     *
     */
    comment?: string;
    /**
     * The date by which the payment for the debit memo is due, in `yyyy-mm-dd` format.
     *
     * @remarks
     *
     */
    dueDate?: Date;
    /**
     * The date when the debit memo takes effect.
     *
     * @remarks
     *
     */
    effectiveDate?: Date;
    /**
     * Container for debit memo items.
     *
     * @remarks
     *
     */
    items?: PUTDebitMemoItemType[];
    /**
     * A code identifying the reason for the transaction. The value must be an existing reason code or empty. If you do not specify a value, Zuora uses the default reason code
     *
     * @remarks
     *
     */
    reasonCode?: string;
    /**
     * Whether the debit memo is transferred to an external accounting system. Use this field for integration with accounting systems, such as NetSuite.
     *
     * @remarks
     *
     */
    transferredToAccounting?: PUTDebitMemoTypeTransferredToAccountingEnum;
}
