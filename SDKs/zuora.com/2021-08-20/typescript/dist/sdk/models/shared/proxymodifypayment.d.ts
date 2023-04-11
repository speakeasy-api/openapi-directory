import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The status of the payment in Zuora. The value depends on the type of payments.
 *
 * @remarks
 *
 * - If you have the Invoice Settlement feature disabled, for electronic payments, the status can be `Processed`, `Processing`, `Error`, or `Voided`. For external payments, the status can be `Processed` or `Canceled`.
 * - If you have the Invoice Settlement feature enabled, for electronic payments, the status can be `Processed`, `Processing`, `Error`, or `Canceled`. For external payments, the status can be `Processed` or `Canceled`.
 *
 */
export declare enum ProxyModifyPaymentStatusEnum {
    Processed = "Processed",
    Error = "Error",
    Voided = "Voided",
    Canceled = "Canceled"
}
/**
 * Whether the refund was transferred to an external accounting system. Use this field for integration with accounting systems, such as NetSuite.
 *
 * @remarks
 *
 */
export declare enum ProxyModifyPaymentTransferredToAccountingEnum {
    Processing = "Processing",
    Yes = "Yes",
    Error = "Error",
    Ignore = "Ignore"
}
/**
 * The type of the payment, whether the payment is external or electronic.
 *
 * @remarks
 *
 */
export declare enum ProxyModifyPaymentTypeEnum {
    External = "External",
    Electronic = "Electronic"
}
/**
 * Container for custom fields of a Payment object.
 *
 * @remarks
 *
 */
export declare class ProxyModifyPayment extends SpeakeasyBase {
    /**
     * The unique account ID for the customer that the payment is for.
     *
     * @remarks
     *
     */
    accountId?: string;
    /**
     * The accounting code for the payment. Accounting codes group transactions that contain similar accounting attributes.
     *
     * @remarks
     *
     */
    accountingCode?: string;
    /**
     * The amount of the payment.
     *
     * @remarks
     *
     */
    amount?: number;
    /**
     * The date when the payment takes effect.
     *
     * @remarks
     *
     */
    effectiveDate?: Date;
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
     * The ID of the payment method used for the payment.
     *
     * @remarks
     *
     */
    paymentMethodId?: string;
    /**
     * The transaction ID returned by the payment gateway. Use this field to reconcile payments between your gateway and Zuora Payments.
     *
     * @remarks
     *
     */
    referenceId?: string;
    /**
     * The status of the payment in Zuora. The value depends on the type of payments.
     *
     * @remarks
     *
     * - If you have the Invoice Settlement feature disabled, for electronic payments, the status can be `Processed`, `Processing`, `Error`, or `Voided`. For external payments, the status can be `Processed` or `Canceled`.
     * - If you have the Invoice Settlement feature enabled, for electronic payments, the status can be `Processed`, `Processing`, `Error`, or `Canceled`. For external payments, the status can be `Processed` or `Canceled`.
     *
     */
    status?: ProxyModifyPaymentStatusEnum;
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
     * Whether the refund was transferred to an external accounting system. Use this field for integration with accounting systems, such as NetSuite.
     *
     * @remarks
     *
     */
    transferredToAccounting?: ProxyModifyPaymentTransferredToAccountingEnum;
    /**
     * The type of the payment, whether the payment is external or electronic.
     *
     * @remarks
     *
     */
    type?: ProxyModifyPaymentTypeEnum;
}
