import { SpeakeasyBase } from "../../../internal/utils";
import { GatewayOption } from "./gatewayoption";
import { RefundInvoicePayment } from "./refundinvoicepayment";
/**
 * A field used to pass gateway options. Zuora allows you to pass in special gateway-specific parameters for payments that go through the Adyen, Autorize.et, CyberSource, Merchant eSolutions, Orbital (Chase Paymentech), QValent, Vantiv, and Verifi gateways.
 *
 * @remarks
 *
 * For each of these special parameters, you supply the name-value pair and Zuora passes it to the gateway. This allows you to add functionality that's supported by a specific gateway but currently not supported by Zuora.
 *
 */
export declare class ProxyCreateRefundGatewayOptionData extends SpeakeasyBase {
    gatewayOption: GatewayOption[];
}
/**
 * Container for the refund invoice payment data. This field is only required if you apply a full or partical refund against a payment attached to muliple invoices.
 *
 * @remarks
 *
 */
export declare class ProxyCreateRefundRefundInvoicePaymentData extends SpeakeasyBase {
    refundInvoicePayment: RefundInvoicePayment[];
}
/**
 * Container for custom fields of a Refund object.
 *
 * @remarks
 *
 */
export declare class ProxyCreateRefund extends SpeakeasyBase {
    /**
     *  The ID of the account associated with this refund. This field is only required if you create a non-referenced refund. Don't specify a value for any other type of refund; Zuora associates the refund automatically with the account from the associated payment.
     *
     * @remarks
     * **Character limit**: 32 **Values**: a valid account ID
     */
    accountId?: string;
    /**
     *  The amount of the refund. The amount can't exceed the amount of the associated payment. If the original payment was applied to a single invoice, you can create a partial refund by specifying an amount in this field or through the UI. If the payment was applied to multiple invoices, you can create a partial refund by using the `RefundInvoicePaymentData` field of this operation or through the UI.
     *
     * @remarks
     * **Character limit**: 16 **Values**: a valid currency amount
     */
    amount: number;
    /**
     *  Use this field to record comments about the refund.
     *
     * @remarks
     * **Character limit**: 255 **Values**: a string of 255 characters or fewer
     */
    comment?: string;
    /**
     * A field used to pass gateway options. Zuora allows you to pass in special gateway-specific parameters for payments that go through the Adyen, Autorize.et, CyberSource, Merchant eSolutions, Orbital (Chase Paymentech), QValent, Vantiv, and Verifi gateways.
     *
     * @remarks
     *
     * For each of these special parameters, you supply the name-value pair and Zuora passes it to the gateway. This allows you to add functionality that's supported by a specific gateway but currently not supported by Zuora.
     *
     */
    gatewayOptionData?: ProxyCreateRefundGatewayOptionData;
    /**
     *  The status of the payment in the gateway.
     *
     * @remarks
     * **Character limit**: 19 **Values**: automatically generated
     */
    gatewayState?: string;
    /**
     * ID of the corresponding object in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    integrationIdNS?: string;
    /**
     * Status of the refund's synchronization with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    integrationStatusNS?: string;
    /**
     *  Indicates how an external refund was issued to a customer. This field is only required if the `Type` field is set to ` External`. You can issue an external refund on an electronic payment. **Character limit**: 30 **Values**:
     *
     * @remarks
     *
     * - `ACH`
     * - `Cash`
     * - `Check`
     * - `CreditCard`
     * - `Other`
     * - `PayPal`
     * - `WireTransfer`
     * - `DebitCard`
     * - `CreditCardReferenceTransaction`
     *
     */
    methodType?: string;
    /**
     * Origin of the corresponding object in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    originNS?: string;
    /**
     *  The unique ID of the payment associated with this refund. Don't specify a value for this field if you're creating an electronic non-referenced refund.
     *
     * @remarks
     * **Character limit**: 32 **Values**: a valid payment ID
     */
    paymentId?: string;
    /**
     *  The unique ID of the payment method that the customer used to make the payment. This field is only required if you create a non-referenced refund.
     *
     * @remarks
     * **Character limit**: 32 **V****alues**: a valid payment method ID
     */
    paymentMethodId?: string;
    /**
     *  A code identifying the reason for the transaction. Must be an existing reason code or empty. If you do not specify a value, Zuora uses the default reason code.
     *
     * @remarks
     * **Character limit**: 32 **V****alues**: a valid reason code
     */
    reasonCode?: string;
    /**
     * The date of the refund, in `yyyy-mm-dd` format. The date of the refund cannot be before the payment date. This field is only required if the `Type` field is set to ` External`. Zuora automatically generates this field for electronic refunds.
     *
     * @remarks
     *
     * With the Future Dated Credit Balance Adjustment feature enabled, you can create a non-referenced refund with a refund date.
     * * For external refunds, you can specify any date.
     * * For electronic refunds, you can only set the date to the date when the API operation is called or one day later.
     *
     */
    refundDate?: Date;
    /**
     * Container for the refund invoice payment data. This field is only required if you apply a full or partical refund against a payment attached to muliple invoices.
     *
     * @remarks
     *
     */
    refundInvoicePaymentData?: ProxyCreateRefundRefundInvoicePaymentData;
    /**
     *  A payment gateway-specific field that maps Zuora to other gateways . **Character limit**: 35 **Values**:
     *
     * @remarks
     *
     * - 3-byte company identifier &quot;*&quot; 18-byte descriptor
     * - 7-byte company identifier &quot;*&quot; 14-byte descriptor
     * - 12-byte company identifier &quot;*&quot; 9-byte descriptor
     *
     */
    softDescriptor?: string;
    /**
     *  A payment gateway-specific field that maps Zuora to other gateways . **Character limit**: 20 **Values**:
     *
     * @remarks
     *
     * - Customer service phone number formatted as: `NNN-NNN-NNNN` or `NNN-AAAAAAA`
     * - URL (non-e-Commerce): Transactions sent with a URL do not qualify for the best interchange rate
     * - Email address
     *
     */
    softDescriptorPhone?: string;
    /**
     *  Specifies whether the refund is a refund payment or a credit balance. This field is only required if you create a non-referenced refund. If you creating an non-referenced refund, then set this value to `CreditBalance`.
     *
     * @remarks
     * **Note**: If you have the Invoice Settlement feature enabled, the value of this field can only be set to `Payment`.
     * **Character limit**: 13 **Values**:
     *
     * - `Payment`
     * - `CreditBalance`
     *
     */
    sourceType?: string;
    /**
     * Date when the refund was synchronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    syncDateNS?: string;
    /**
     * Specifies whether the refund should be synchronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    synctoNetSuiteNS?: string;
    /**
     *  Specifies if the refund is electronic or external.
     *
     * @remarks
     * **Character limit**: 10 **Values**:
     *
     * - `Electronic`
     * - `External`
     *
     */
    type: string;
}
