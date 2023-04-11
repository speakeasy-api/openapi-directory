import { SpeakeasyBase } from "../../../internal/utils";
import { CreditMemoFromChargeDetailType } from "./creditmemofromchargedetailtype";
/**
 * Container for custom fields of a Credit Memo object.
 *
 * @remarks
 *
 */
export declare class CreditMemoFromChargeType extends SpeakeasyBase {
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
     * The ID of the account associated with the credit memo.
     *
     * @remarks
     *
     */
    accountId: string;
    /**
     * Whether to automatically post the credit memo after it is created.
     *
     * @remarks
     *
     * Setting this field to `true`, you do not need to separately call the [Post a credit memo](https://www.zuora.com/developer/api-reference/#operation/PUT_PostCreditMemo) operation to post the credit memo.
     *
     */
    autoPost?: boolean;
    /**
     * Container for product rate plan charges. The maximum number of items is 1,000.
     *
     * @remarks
     *
     */
    charges?: CreditMemoFromChargeDetailType[];
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
     * A code identifying the reason for the transaction. The value must be an existing reason code or empty. If you do not specify a value, Zuora uses the default reason code.
     *
     * @remarks
     *
     */
    reasonCode?: string;
}
