import { SpeakeasyBase } from "../../../internal/utils";
import { CreditMemoItemFromInvoiceItemType } from "./creditmemoitemfrominvoiceitemtype";
/**
 * Container for custom fields of a Credit Memo object.
 *
 * @remarks
 *
 */
export declare class CreditMemoFromInvoiceType extends SpeakeasyBase {
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
    autoApplyToInvoiceUponPosting?: boolean;
    /**
     * Whether to automatically post the credit memo after it is created.
     *
     * @remarks
     *
     * Setting this field to `true`, you do not need to separately call the [Post credit memo](https://www.zuora.com/developer/api-reference/#operation/PUT_PostCreditMemo) operation to post the credit memo.
     *
     */
    autoPost?: boolean;
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
     * The ID of the invoice that the credit memo is created from.
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
    items?: CreditMemoItemFromInvoiceItemType[];
    /**
     * A code identifying the reason for the transaction. The value must be an existing reason code or empty. If you do not specify a value, Zuora uses the default reason code.
     *
     * @remarks
     *
     */
    reasonCode?: string;
    /**
     * Whether to automatically calculate taxes in the credit memo.
     *
     * @remarks
     *
     */
    taxAutoCalculation?: boolean;
}
