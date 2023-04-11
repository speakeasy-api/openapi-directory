import { SpeakeasyBase } from "../../../internal/utils";
import { GETPaidInvoicesType } from "./getpaidinvoicestype";
/**
 * Container for custom fields of a Payment object.
 *
 * @remarks
 *
 */
export declare class GETPaymentType extends SpeakeasyBase {
    /**
     * ID of the corresponding object in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    integrationIdNS?: string;
    /**
     * Status of the payment's synchronization with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
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
     * Date when the payment was synchronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
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
     * Customer account ID.
     *
     * @remarks
     *
     */
    accountID?: string;
    /**
     * Customer account name.
     *
     * @remarks
     *
     */
    accountName?: string;
    /**
     * Customer account number.
     *
     * @remarks
     *
     */
    accountNumber?: string;
    /**
     * Payment amount.
     *
     * @remarks
     *
     */
    amount?: string;
    /**
     * Effective payment date as _yyyy-mm-dd_.
     *
     * @remarks
     *
     */
    effectiveDate?: Date;
    /**
     * Transaction ID from payment gateway.
     *
     * @remarks
     *
     */
    gatewayTransactionNumber?: string;
    /**
     * PaymentID.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * Information about one or more invoices to which this payment was applied:
     *
     * @remarks
     *
     */
    paidInvoices?: GETPaidInvoicesType[];
    /**
     * Payment method.
     *
     * @remarks
     *
     */
    paymentMethodID?: string;
    /**
     * Unique payment number.
     *
     * @remarks
     *
     */
    paymentNumber?: string;
    /**
     * Possible values are: `Draft`, `Processing`, `Processed`, `Error`, `Voided`, `Canceled`, `Posted.
     *
     * @remarks
     *
     */
    status?: string;
    /**
     * Possible values are: `External`, `Electronic`.
     *
     * @remarks
     *
     */
    type?: string;
}
