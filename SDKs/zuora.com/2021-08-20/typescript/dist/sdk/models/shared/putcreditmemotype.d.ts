import { SpeakeasyBase } from "../../../internal/utils";
import { PUTCreditMemoItemType } from "./putcreditmemoitemtype";
/**
 * Whether the credit memo is transferred to an external accounting system. Use this field for integration with accounting systems, such as NetSuite.
 *
 * @remarks
 *
 */
export declare enum PUTCreditMemoTypeTransferredToAccountingEnum {
    Processing = "Processing",
    Yes = "Yes",
    No = "No",
    Error = "Error",
    Ignore = "Ignore"
}
/**
 * Container for custom fields of a Credit Memo object.
 *
 * @remarks
 *
 */
export declare class PUTCreditMemoType extends SpeakeasyBase {
    /**
     * ID of the corresponding object in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    integrationIdNS?: string;
    /**
     * Status of the credit memo's synchronization with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    integrationStatusNS?: string;
    /**
     * Origin of the corresponding object in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    originNS?: string;
    /**
     * Date when the credit memo was synchronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    syncDateNS?: string;
    /**
     * Related transaction in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    transactionNS?: string;
    /**
     * Whether the credit memo automatically applies to the invoice upon posting.
     *
     * @remarks
     *
     */
    autoApplyUponPosting?: boolean;
    /**
     * Comments about the credit memo.
     *
     * @remarks
     *
     */
    comment?: string;
    /**
     * The date when the credit memo takes effect.
     *
     * @remarks
     *
     */
    effectiveDate?: Date;
    /**
     * Whether the credit memo is excluded from the rule of automatically applying credit memos to invoices.
     *
     * @remarks
     *
     */
    excludeFromAutoApplyRules?: boolean;
    /**
     * Container for credit memo items.
     *
     * @remarks
     *
     */
    items?: PUTCreditMemoItemType[];
    /**
     * A code identifying the reason for the transaction. The value must be an existing reason code or empty. If you do not specify a value, Zuora uses the default reason code.
     *
     * @remarks
     *
     */
    reasonCode?: string;
    /**
     * Whether the credit memo is transferred to an external accounting system. Use this field for integration with accounting systems, such as NetSuite.
     *
     * @remarks
     *
     */
    transferredToAccounting?: PUTCreditMemoTypeTransferredToAccountingEnum;
}
