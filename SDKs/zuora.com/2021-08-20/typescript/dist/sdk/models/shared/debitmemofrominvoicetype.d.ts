import { SpeakeasyBase } from "../../../internal/utils";
import { DebitMemoItemFromInvoiceItemType } from "./debitmemoitemfrominvoiceitemtype";
/**
 * Container for custom fields of a Debit Memo object.
 *
 * @remarks
 *
 */
export declare class DebitMemoFromInvoiceType extends SpeakeasyBase {
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
     * Whether to automatically post the debit memo after it is created.
     *
     * @remarks
     *
     * Setting this field to `true`, you do not need to separately call the [Post debit memo](https://www.zuora.com/developer/api-reference/#operation/PUT_PostDebitMemo) operation to post the debit memo.
     *
     */
    autoPost?: boolean;
    /**
     * Comments about the debit memo.
     *
     * @remarks
     *
     */
    comment?: string;
    /**
     * The date when the debit memo takes effect.
     *
     * @remarks
     *
     */
    effectiveDate?: Date;
    /**
     * The ID of the invoice that the debit memo is created from.
     *
     * @remarks
     *
     * * If this field is specified, its value must be the same as the value of the `invoiceId` path parameter. Otherwise, its value overrides the value of the `invoiceId` path parameter.
     * * If this field is not specified, the value of the `invoiceId` path parameter is used.
     *
     */
    invoiceId?: string;
    /**
     * Container for items. The maximum number of items is 1,000.
     *
     * @remarks
     *
     */
    items?: DebitMemoItemFromInvoiceItemType[];
    /**
     * A code identifying the reason for the transaction. The value must be an existing reason code or empty. If you do not specify a value, Zuora uses the default reason code.
     *
     * @remarks
     *
     */
    reasonCode?: string;
    /**
     * Whether to automatically calculate taxes in the debit memo.
     *
     * @remarks
     *
     */
    taxAutoCalculation?: boolean;
}
