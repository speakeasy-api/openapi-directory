import { SpeakeasyBase } from "../../../internal/utils";
import { GatewayOption } from "./gatewayoption";
import { InvoicePayment } from "./invoicepayment";
/**
 * A field used to pass gateway options. Zuora allows you to pass in special gateway-specific parameters for payments that go through the Adyen, Autorize.et, CyberSource, Merchant eSolutions, Orbital (Chase Paymentech), QValent, Vantiv, and Verifi gateways.
 *
 * @remarks
 *
 * For each of these special parameters, you supply the name-value pair and Zuora passes it to the gateway. This allows you to add functionality that's supported by a specific gateway but currently not supported by Zuora.
 *
 */
export declare class ProxyCreatePaymentGatewayOptionData extends SpeakeasyBase {
    gatewayOption: GatewayOption[];
}
/**
 * The status of the payment in the gateway; use for reconciliation.
 *
 * @remarks
 *
 */
export declare enum ProxyCreatePaymentGatewayStateEnum {
    MarkedForSubmission = "MarkedForSubmission",
    Submitted = "Submitted",
    Settled = "Settled",
    NotSubmitted = "NotSubmitted",
    FailedToSettle = "FailedToSettle"
}
/**
 * Container for the invoice payment data. This field is only required if you apply a payment to multiple invoices.
 *
 * @remarks
 *
 */
export declare class ProxyCreatePaymentInvoicePaymentData extends SpeakeasyBase {
    invoicePayment: InvoicePayment[];
}
/**
 * The status of the payment in Zuora. The value depends on the type of payments.
 *
 * @remarks
 *
 * - If you have the Invoice Settlement feature disabled, for electronic payments, the status can be `Processed`, `Processing`, `Error`, or `Voided`. For external payments, the status can be `Processed` or `Canceled`.
 * - If you have the Invoice Settlement feature enabled, for electronic payments, the status can be `Processed`, `Processing`, `Error`, or `Canceled`. For external payments, the status can be `Processed` or `Canceled`.
 *
 */
export declare enum ProxyCreatePaymentStatusEnum {
    Processed = "Processed",
    Error = "Error",
    Voided = "Voided",
    Canceled = "Canceled"
}
/**
 * The type of the payment, whether the payment is external or electronic.
 *
 * @remarks
 *
 */
export declare enum ProxyCreatePaymentTypeEnum {
    External = "External",
    Electronic = "Electronic"
}
/**
 * Container for custom fields of a Payment object.
 *
 * @remarks
 *
 */
export declare class ProxyCreatePayment extends SpeakeasyBase {
    /**
     * The unique account ID for the customer that the payment is for.
     *
     * @remarks
     *
     */
    accountId: string;
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
     * If Invoice Settlement is enabled, this field is required.
     *
     */
    amount?: number;
    /**
     * If you have the Invoice Settlement feature disabled, the value of this field is the amount of the payment to apply to a credit balance. This field is only required if the `AppliedInvoiceAmount` field value is null.
     *
     * @remarks
     *
     * If you have the Invoice Settlement feature enabled, the value of this field is created as the unapplied amount.
     *
     */
    appliedCreditBalanceAmount?: number;
    /**
     * The amount of the payment to apply to an invoice. This field is only required if either the `InvoiceId` or `InvoiceNumber` field is not null.
     *
     * @remarks
     *
     */
    appliedInvoiceAmount?: number;
    /**
     * The authorization transaction ID from the payment gateway. Use this field for electronic payments, such as credit cards.
     *
     * @remarks
     *
     */
    authTransactionId?: string;
    /**
     * Additional information related to the payment.
     *
     * @remarks
     *
     */
    comment?: string;
    /**
     * The date when the payment takes effect.
     *
     * @remarks
     *
     */
    effectiveDate: Date;
    /**
     * The name of the gateway instance that processes the payment. When creating a payment, the value of this field must be a valid gateway instance name, and this gateway must support the specific payment method. If no value is specified, the default gateway on the Account will be used.
     *
     * @remarks
     *
     */
    gateway?: string;
    /**
     * A field used to pass gateway options. Zuora allows you to pass in special gateway-specific parameters for payments that go through the Adyen, Autorize.et, CyberSource, Merchant eSolutions, Orbital (Chase Paymentech), QValent, Vantiv, and Verifi gateways.
     *
     * @remarks
     *
     * For each of these special parameters, you supply the name-value pair and Zuora passes it to the gateway. This allows you to add functionality that's supported by a specific gateway but currently not supported by Zuora.
     *
     */
    gatewayOptionData?: ProxyCreatePaymentGatewayOptionData;
    /**
     * A merchant-specified natural key value that can be passed to the electronic payment gateway when a payment is created. If not specified, the payment number will be passed in instead.
     *
     * @remarks
     *
     * Gateways check duplicates on the gateway order ID to ensure that the merchant do not accidentally enter the same transaction twice. This ID can also be used to do reconciliation and tie the payment to a natural key in external systems. The source of this ID varies by merchant. Some merchants use their shopping cart order IDs, and others use something different. Merchants use this ID to track transactions in their eCommerce systems.
     *
     */
    gatewayOrderId?: string;
    /**
     * The message returned from the payment gateway for the payment. This message is gateway-dependent.
     *
     * @remarks
     *
     */
    gatewayResponse?: string;
    /**
     * The code returned from the payment gateway for the payment. This code is gateway-dependent.
     *
     * @remarks
     *
     */
    gatewayResponseCode?: string;
    /**
     * The status of the payment in the gateway; use for reconciliation.
     *
     * @remarks
     *
     */
    gatewayState?: ProxyCreatePaymentGatewayStateEnum;
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
     * The ID of the invoice that the payment is applied to. When applying a payment to a single invoice, this field is only required if the `InvoiceNumber` field is null.
     *
     * @remarks
     *
     */
    invoiceId?: string;
    /**
     * The unique identification number for the invoice that the payment is applied to. When applying a payment to a single invoice, this field is only required if the `InvoiceId` field is null.
     *
     * @remarks
     *
     */
    invoiceNumber?: string;
    /**
     * Container for the invoice payment data. This field is only required if you apply a payment to multiple invoices.
     *
     * @remarks
     *
     */
    invoicePaymentData?: ProxyCreatePaymentInvoicePaymentData;
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
    paymentMethodId: string;
    /**
     * The unique identification number of the payment. For example, P-00000028.
     *
     * @remarks
     *
     */
    paymentNumber?: string;
    /**
     * The transaction ID returned by the payment gateway. Use this field to reconcile payments between your gateway and Zuora Payments.
     *
     * @remarks
     *
     */
    referenceId?: string;
    /**
     * A payment gateway-specific field that maps to Zuora for the gateways, Orbital, Vantiv and Verifi.
     *
     * @remarks
     *
     * Zuora passes this field to Verifi directly without verification. In general, this field will be defaulted by the gateway. For Orbital, this field contains two fields separated by an asterisk, `SDMerchantName` and `SDProductionInfo`. For more information, contact your payment gateway.
     *
     */
    softDescriptor?: string;
    /**
     * A payment gateway-specific field that maps to Zuora for the gateways, Orbital, Vantiv and Verifi.
     *
     * @remarks
     *
     * Verifi and Orbital determine how to format this string. For more information, contact your payment gateway.
     *
     */
    softDescriptorPhone?: string;
    /**
     * The status of the payment in Zuora. The value depends on the type of payments.
     *
     * @remarks
     *
     * - If you have the Invoice Settlement feature disabled, for electronic payments, the status can be `Processed`, `Processing`, `Error`, or `Voided`. For external payments, the status can be `Processed` or `Canceled`.
     * - If you have the Invoice Settlement feature enabled, for electronic payments, the status can be `Processed`, `Processing`, `Error`, or `Canceled`. For external payments, the status can be `Processed` or `Canceled`.
     *
     */
    status: ProxyCreatePaymentStatusEnum;
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
     * The type of the payment, whether the payment is external or electronic.
     *
     * @remarks
     *
     */
    type: ProxyCreatePaymentTypeEnum;
}
