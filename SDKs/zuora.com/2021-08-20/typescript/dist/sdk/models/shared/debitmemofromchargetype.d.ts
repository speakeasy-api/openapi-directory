import { SpeakeasyBase } from "../../../internal/utils";
import { DebitMemoFromChargeDetailType } from "./debitmemofromchargedetailtype";
/**
 * Container for custom fields of a Debit Memo object.
 *
 * @remarks
 *
 */
export declare class DebitMemoFromChargeType extends SpeakeasyBase {
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
     * The ID of the account associated with the debit memo.
     *
     * @remarks
     *
     * **Note**: When creating debit memos from product rate plan charges, you must specify `accountNumber`, `accountId`, or both in the request body. If both fields are specified, they must correspond to the same account.
     *
     */
    accountId?: string;
    /**
     * The Number of the account associated with the debit memo.
     *
     * @remarks
     *
     * **Note**: When creating debit memos from product rate plan charges, you must specify `accountNumber`, `accountId`, or both in the request body. If both fields are specified, they must correspond to the same account.
     *
     */
    accountNumber?: string;
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
     * Whether to automatically post the debit memo after it is created.
     *
     * @remarks
     *
     * Setting this field to `true`, you do not need to separately call the [Post a debit memo](https://www.zuora.com/developer/api-reference/#operation/PUT_PostDebitMemo) operation to post the debit memo.
     *
     */
    autoPost?: boolean;
    /**
     * Container for product rate plan charges. The maximum number of items is 1,000.
     *
     * @remarks
     *
     */
    charges?: DebitMemoFromChargeDetailType[];
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
     * A code identifying the reason for the transaction. The value must be an existing reason code or empty. If you do not specify a value, Zuora uses the default reason code.
     *
     * @remarks
     *
     */
    reasonCode?: string;
}
